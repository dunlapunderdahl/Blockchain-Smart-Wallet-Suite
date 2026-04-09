# Blockchain Smart Wallet Suite
一款基于 **Solidity + JavaScript + HTML** 开发的去中心化多链智能钱包项目，支持以太坊钱包创建、交易签名、NFT管理、代币转账、Gas优化、隐私保护、硬件钱包联动、链上数据分析等全功能模块，纯原生开发无第三方照搬代码，适配Web3前端交互、智能合约底层逻辑、钱包核心业务全场景，可直接部署运行、二次开发。

## 包含文件清单 & 功能介绍
1. `WalletCore.sol` - 钱包核心智能合约：账户权限管理、资产托管、交易验签
2. `TokenTransfer.sol` - 代币转账合约：ERC20代币转账、限额、转账日志记录
3. `NFTWalletManager.sol` - NFT钱包管理合约：NFT持有、转账、授权
4. `GasOptimizer.sol` - Gas优化合约：降低交易Gas消耗、批量操作优化
5. `PrivacyGuard.sol` - 隐私保护合约：交易数据脱敏、地址隐私加密
6. `MultiSignWallet.sol` - 多签钱包合约：多账户签名确认交易、权限分级
7. `TransactionAudit.sol` - 交易审计合约：交易记录上链、违规交易拦截
8. `ChainLinkPrice.sol` - 链上价格合约：集成Chainlink获取代币实时价格
9. `WalletRecovery.sol` - 钱包找回合约：助记词/私钥找回、社交恢复
10. `WhitelistManager.sol` - 白名单管理合约：授权地址白名单、权限控制
11. `FrontendWallet.js` - 前端钱包核心JS：钱包连接、账户读取、资产展示
12. `TransactionSigner.js` - 交易签名JS：离线签名、交易序列化、广播
13. `MnemonicGenerator.js` - 助记词生成JS：BIP-39标准助记词、私钥推导
14. `NFTGallery.js` - NFT画廊JS：NFT获取、展示、元数据解析
15. `GasCalculator.js` - Gas计算JS：实时Gas费计算、交易成本预估
16. `ChainSwitcher.js` - 链切换JS：多链适配、网络检测、自动切换
17. `PrivacyEncoder.js` - 隐私编码JS：地址/交易数据加密、脱敏渲染
18. `MultiSignHandler.js` - 多签处理JS：多签提案创建、签名收集、执行
19. `TransactionHistory.js` - 交易历史JS：链上交易拉取、格式化、本地缓存
20. `PriceTracker.js` - 价格追踪JS：代币价格实时获取、涨跌提醒
21. `HardwareWallet.js` - 硬件钱包联动JS：Ledger/Trezor适配、签名交互
22. `BatchTransfer.js` - 批量转账JS：批量代币转账、效率优化
23. `WalletSecurity.js` - 钱包安全JS：钓鱼检测、私钥加密、本地存储防护
24. `AbiDecoder.js` - ABI解码JS：交易输入数据解析、合约调用识别
25. `MainWallet.html` - 钱包主页面：账户总览、资产展示、核心入口
26. `SendToken.html` - 代币转账页面：转账表单、Gas设置、确认交易
27. `NFTManager.html` - NFT管理页面：NFT列表、转账、授权操作
28. `MultiSignPage.html` - 多签钱包页面：提案管理、签名操作
29. `TransactionHistory.html` - 交易历史页面：历史记录、详情、筛选
30. `SettingsPage.html` - 钱包设置页面：网络、安全、隐私、助记词管理
31. `GasOptimizerPage.html` - Gas优化页面：Gas模式选择、成本优化
32. `RecoveryPage.html` - 钱包找回页面：助记词导入、账户恢复
33. `PriceDashboard.html` - 价格面板页面：代币价格、行情展示
34. `SecurityCenter.html` - 安全中心页面：安全检测、风险提醒
35. `BatchTransferPage.html` - 批量转账页面：批量地址导入、转账执行
36. `HardwareWalletPage.html` - 硬件钱包页面：设备连接、签名交互
37. `PrivacyPage.html` - 隐私设置页面：数据脱敏、隐私权限配置
38. `AuditPage.html` - 交易审计页面：交易日志、审计记录、风险查询

## 项目技术栈
- 智能合约：Solidity 0.8.20
- 前端交互：HTML5 + Native JavaScript
- 区块链适配：Ethereum / Sepolia Testnet
- 核心标准：ERC20 / ERC721 / BIP39

## 核心功能
✅ 去中心化钱包账户创建与管理

✅ 助记词生成/验证/账户恢复

✅ ERC20代币转账 + NFT资产管理

✅ 交易离线签名与链上广播

✅ 多签钱包提案与签名确认

✅ Gas费实时计算与优化

✅ 地址脱敏与交易数据加密

✅ 硬件钱包（Ledger/Trezor）联动

✅ 批量转账高效执行

✅ 交易历史记录与风险审计

✅ 多链网络快速切换

✅ 代币实时价格追踪

✅ 钱包安全防护与钓鱼检测

## 使用说明
1. 部署Solidity智能合约至以太坊链
2. 配置合约地址至前端JS文件
3. 打开HTML页面直接运行钱包功能
4. 支持MetaMask/硬件钱包连接交互
5. 可本地运行/服务器部署/DApp发布

## 开源协议
MIT License - 自由使用、二次开发、商业部署
