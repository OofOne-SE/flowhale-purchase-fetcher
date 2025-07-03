export default [
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "promoCode",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "paidInEth",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "paymentTokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pricePaid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "customData",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct Flowhale.LicensePurchase",
        "name": "license",
        "type": "tuple"
      }
    ],
    "name": "LicenseAcquired",
    "type": "event"
  }
] as const;