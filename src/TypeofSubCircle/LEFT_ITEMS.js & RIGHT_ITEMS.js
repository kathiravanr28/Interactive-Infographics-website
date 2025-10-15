import { IMAGES } from "../images/images.js";
import { VIDEOS } from "../videos/videos.js";

export const LEFT_ITEMS = [
  { label: "Cooperative & Non-Cooperative", key: "cooperativeNonCooperative", imgs:[IMAGES.cooperativeVsNonCoop,IMAGES.CooperativeVsNonCoopstat] , video: VIDEOS.cooperativeVsNonCoop, },
  { label: "Zero-Sum & Non-Zero-Sum", key: "zeroSumNonZeroSum", imgs:[IMAGES.zeroSumVsNonZeroSum,IMAGES.ZeroSumVsNonZeroSumstat], video: VIDEOS.zeroSumVsNonZeroSum },
  { label: "Symmetric & Asymmetric", key: "symmetricAsymmetric", imgs: [IMAGES.symmetricVsAsymmetric,IMAGES.SymmetricVsAsymmetricstat], video: VIDEOS.symmetricVsAsymmetric },
  { label: "Simultaneous & Sequential Moves", key: "simultaneousSequential", imgs:[IMAGES.simultaneousVsSequential,IMAGES.SimultaneousVsSequentialstat] , video: VIDEOS.simultaneousVsSequential },
  { label: "Perfect & Imperfect Information", key: "perfectImperfect", imgs:[IMAGES.perfectVsImperfect,IMAGES.PerfectVsImperfectstat] , video: VIDEOS.perfectVsImperfect },
  { label: "Normal & Extensive Form", key: "normalExtensive", imgs:[IMAGES.normalVsExtensive,IMAGES.NormalVsExtensivestat] , video: VIDEOS.normalVsExtensive },
];

export const RIGHT_ITEMS = [
  { label: "Action-Adventure", key: "actionAdventure", imgs:[IMAGES.actionAdventure,IMAGES.ActionAdventurestat] , video: VIDEOS.actionAdventure },
  { label: "Role-Playing Game (RPG)", key: "rolePlayingGameRpg", imgs: [IMAGES.rolePlaying,IMAGES.RolePlayingstat], video: VIDEOS.rolePlaying },
  { label: "Shooting Game", key: "shootingGame", imgs: [IMAGES.shootingGame,IMAGES.ShootingGamestat], video: VIDEOS.shootingGame },
  { label: "Strategy Game", key: "strategyGame", imgs:[IMAGES.strategyGame,IMAGES.StrategyGamestat] , video: VIDEOS.strategyGame },
  { label: "Sports Game", key: "sportsGame", imgs:[IMAGES.sportsGame,IMAGES.SportsGamestat] , video: VIDEOS.sportsGame },
  { label: "Puzzle Game", key: "puzzleGame", imgs: [IMAGES.puzzleGame,IMAGES.PuzzleGamestat], video: VIDEOS.puzzleGame },
];
