const Storage = artifacts.require("Storage");

contract("Storage", () => {

    it("Should create a string", async () => {

        let instance = await Storage.deployed();

        const resp = await instance.storeString.call(1,'00000100000100000100000100000001');
        console.log(resp);
        assert(resp.toNumber() === 1, 'No Creado');
    });

    it("Should create a hash", async () => {

        let instance = await Storage.deployed();

        const resp = await instance.storeHash.call(1,'0x00000100000100000100000100000001');
        console.log(resp);
        assert(resp === true, 'No Creado');
    });

});

