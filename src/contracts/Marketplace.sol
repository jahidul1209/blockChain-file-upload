// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Marketplace {
    string public name;
    address public  owner;
    uint public productCount = 0;
    mapping(uint => Product) public products;

    struct Product {
        uint id;
        string name;
        uint price;
        string imageHash;
         string description;
        address  owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        string imageHash,
        string description,
        address  owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        string imageHash,
        string description,
        address  owner,
        bool purchased
    );

    constructor() {
        name = "Eternity"; 
        owner = msg.sender;    
    }

    function createProduct(string memory _name, string memory _imageHash, uint _price, string memory _description ) public {
        //  require(msg.sender == owner);
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        productCount ++;
       //description upto 1000
         require(!(bytes(_description).length > 1000));
           // Create the product
        products[productCount] = Product(productCount, _name, _price, _imageHash, _description, msg.sender, false);
        // Trigger an event
        emit ProductCreated(productCount, _name, _price , _imageHash, _description, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address  _seller = _product.owner;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price);
        // Require that the product has not been purchased already
        require(!_product.purchased);
        // Require that the buyer is not the seller
        require(_seller != msg.sender);
        // Transfer ownership to the buyer
        _product.owner = msg.sender;
        // Mark as purchased
        _product.purchased = true;
        // Update the product
        products[_id] = _product;
        // Pay the seller by sending them Ether
        payable(address(_seller)).transfer(msg.value);
        // address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price, _product.imageHash, _product.description , msg.sender, true);
    }
}
