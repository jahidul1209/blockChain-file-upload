// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Marketplace {
    string public name;
    // string public profile;
    address public  owner;
    uint public productCount = 0;
      uint public count= 0;
    mapping(uint => Product) public products;
     mapping(uint256 => Profile) public profile;

    struct Profile {
        string username;
        string  email;
        string biography; 
    }
    
    struct Product {
        uint id;
        string name;
        string  price;
        string imageHash;
        string category;
        string description;
        address  owner;
        bool purchased;
    }
    event  ProfileSetting(
        string username,
        string  email,
        string biography
    );

    event ProductCreated(
        uint id,
        string name,
        string  price,
        string imageHash,
         string category,
        string description,
        address  owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        string   price,
        string imageHash,
         string category,
        string description,
        address  owner,
        bool purchased
    );

    constructor() {
        name = "Eternity"; 
        owner = msg.sender;    
    }

    function profileSetting(string memory _username, string memory _email, string memory _biography ) public {
           // Create the profile
        profile[count] = Profile( _username, _email, _biography);
        // Trigger an event
        emit ProfileSetting(_username, _email, _biography);
    }

    function createProduct(string memory _name, string memory _imageHash, string memory _price, string memory _category, string memory _description ) public {
        //  require(msg.sender == owner);
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        // require(_price >= 0);
        // Increment product count
        productCount ++;
       //description upto 1000
        require(!(bytes(_description).length > 1000));
           // Create the product
        products[productCount] = Product(productCount, _name, _price, _imageHash, _category, _description, msg.sender, false);
        // Trigger an event
        emit ProductCreated(productCount, _name, _price , _imageHash, _category , _description, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address  _seller = _product.owner;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // Require that there is enough Ether in the transaction
        // require(msg.value >= _product.price);
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
        emit ProductPurchased(productCount, _product.name, _product.price, _product.imageHash, _product.category , _product.description , msg.sender, true);
    }
}
