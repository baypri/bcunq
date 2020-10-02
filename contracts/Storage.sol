pragma solidity >=0.6.0 <0.7.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    //Variables de contratos
    address owner;

    struct responsiva {
        string Nombre ;
        string Apellido;
        string Folio;
        bytes32 Firma;
        bytes32 Selfie;
    }
    
    mapping(uint256 => bytes32) public hashStorage;
    mapping(uint256 => responsiva) public responsivaStorage;
    mapping(uint256 => string) public stringStorage;

    //constructor() public { owner = msg.sender; }
    
    // modifier onlyOwner {
    //     require(
    //         msg.sender == owner,
    //         "Only owner can call this function."
    //     );
    //     _;
    // }
    
    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function storeHash(uint256 num, bytes32 hsx) public returns (bool){
        
        hashStorage[num] = hsx;
        
        return true;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function getHash(uint256 num) public view returns (bytes32){
        return hashStorage[num];
    }

    function storeResponsiva(uint256 num, string memory nombre, string memory apellido, string memory folio, 
            bytes32 firma, bytes32 selfie) public returns (bool){

        require(num > 0, 'ID usuario debe ser mayor a 0');
        responsivaStorage[num] = responsiva(nombre, apellido, folio, firma, selfie);

        return true;
    }



    function storeString(uint256 num, string memory hsx) public returns (uint256){
        
        stringStorage[num] = hsx;
        
        return 1;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function getString(uint256 num) public view returns (string memory){
        return stringStorage[num];
    }
    

}
