// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price: 
export const pools = [
  {
    id: 'usdt',
    name: 'USDT',  
    token: 'USDT',
    tokenDescription: 'USDT',
    tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    tokenDecimals: 6,
    tokenDescriptionUrl: 'https://docs.yfii.finance/#/trading-yfii',
    tokenDescriptionUrl2: 'https://docs.yfii.finance/#/zh-cn/buy-tokens?id=_1-yfii%e8%b4%ad%e4%b9%b0%e6%88%96%e5%85%91%e6%8d%a2',
    earnedToken: 'iUSDT',
    earnedTokenAddress: '0x72Cf258c852Dc485a853370171d46B9D29fD3184',
    earnContractAddress: '0x72Cf258c852Dc485a853370171d46B9D29fD3184',
    defaultApy: "41.43",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },{
    id: 'ycrv',
    name: 'yCRV',  
    token: 'yCRV',
    tokenDescription: 'yCRV',
    tokenAddress: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.yfii.finance/#/trading-yfii',
    tokenDescriptionUrl2: 'https://docs.yfii.finance/#/zh-cn/buy-tokens?id=_1-yfii%e8%b4%ad%e4%b9%b0%e6%88%96%e5%85%91%e6%8d%a2',
    earnedToken: 'iYCRV',
    earnedTokenAddress: '0x3E3db9cc5b540d2794DB3861BE5A4887cF77E48B',
    earnContractAddress: '0x3E3db9cc5b540d2794DB3861BE5A4887cF77E48B',
    defaultApy: "42.99",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    id: 'dai',
    name: 'DAI',  
    token: 'DAI',
    tokenDescription: 'DAI',
    tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.yfii.finance/#/trading-yfii',
    tokenDescriptionUrl2: 'https://docs.yfii.finance/#/zh-cn/buy-tokens?id=_1-yfii%e8%b4%ad%e4%b9%b0%e6%88%96%e5%85%91%e6%8d%a2',
    earnedToken: 'iDAI',
    earnedTokenAddress: '0x1e0DC67aEa5aA74718822590294230162B5f2064',
    earnContractAddress: '0x1e0DC67aEa5aA74718822590294230162B5f2064',
    defaultApy: "90",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  }
]