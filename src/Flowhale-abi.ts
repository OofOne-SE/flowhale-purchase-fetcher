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
          }
        ],
        "indexed": false,
        "internalType": "struct Flowhale.License",
        "name": "license",
        "type": "tuple"
      }
    ],
    "name": "LicenseAcquired",
    "type": "event"
  }
] as const;