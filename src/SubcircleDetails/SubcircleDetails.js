import { IMAGES } from "../images/images.js";
import { VIDEOS } from "../videos/videos.js";

export const SUBCIRCLE_DETAILS = {
  // Left (Game Theory)
  cooperativeNonCooperative: {
    title: "Cooperative & Non-Cooperative",
    description: "Build <b>alliances</b> or <b>go rogue—trust, betrayal</b>, and <b>survival</b> make every move <b>unforgettable.</b>",
    video: VIDEOS.cooperativeVsNonCoop,
    image: IMAGES.CooperativeVsNonCoopstat
  },
  zeroSumNonZeroSum: {
    title: "Zero-Sum & Non-Zero-Sum",
    description: "One’s <b>triumph</b> could be another’s <b>downfall…</b> or maybe <b>everyone can win</b>—what side will you play for?",
    video: VIDEOS.zeroSumVsNonZeroSum,
    image: IMAGES.ZeroSumVsNonZeroSumstat
  },
  symmetricAsymmetric: {
    title: "Symmetric & Asymmetric",
    description: "Play <b>fair</b> or <b>unique</b> —when every player’s advantage is different, <b>creativity becomes your weapon.</b>",
    video: VIDEOS.symmetricVsAsymmetric,
    image: IMAGES.SymmetricVsAsymmetricstat
  },
  simultaneousSequential: {
    title: "Simultaneous & Sequential Moves",
    description: "Act <b>fast</b> or <b>wait and watch</b>—the <b>power of timing</b> decides who wins the <b>mind game.</b>",
    video: VIDEOS.simultaneousVsSequential,
    image: IMAGES.SimultaneousVsSequentialstat
  },
  perfectImperfect: {
    title: "Perfect & Imperfect Information",
    description: "Some games <b>reveal it all</b> others <b>hide secrets</b>—can you <b>predict your opponent</b> before they <b>outsmart you?</b>",
    image: IMAGES.PerfectVsImperfectstat,
    video: VIDEOS.perfectVsImperfect
  },
  normalExtensive: {
    title: "Normal & Extensive Form",
    description: "Discover how a <b>single decision</b> can change everything—whether you play in <b>snapshots</b> or <b>unfold the story move by move.</b>",
    image: IMAGES.NormalVsExtensivestat,
    video: VIDEOS.normalVsExtensive
  },

  // Right (Video Games)
  actionAdventure: {
    title: "Action-Adventure",
    description: "Embark on a <b>heart-racing journey</b> filled with <b>battles, mysteries</b>, and <b>discoveries</b> that push your limits at every turn.",
    image: IMAGES.ActionAdventurestat,
    video: VIDEOS.actionAdventure
  },
  rolePlayingGameRpg: {
    title: "Role-Playing Game (RPG)",
    description: "Live another life, <b>shape your destiny</b>shape your destiny, and feel the thrill of every <b>choice</b> you make in a <b>world that reacts to you.</b>",
    image:IMAGES.RolePlayingstat,
    video: VIDEOS.rolePlaying
  },
  shootingGame: {
    title: "Shooting Game",
    description: "Lock, aim, and <b>fire your way through chaos</b>—where every <b>second counts</b> and only the <b>sharpest survive.</b>",
    image: IMAGES.ShootingGamestat,
    video: VIDEOS.shootingGame
  },
  strategyGame: {
    title: "Strategy Game",
    description: "Command, <b>conquer</b>, and craft <b>brilliant tactics</b>—every <b>decision</b> can turn <b>defeat into glorious victory.</b>",
    image: IMAGES.StrategyGamestat,
    video: VIDEOS.strategyGame
  },
  sportsGame: {
    title: "Sports Game",
    description: "Feel the <b>roar of the crowd</b> and the <b>rush of competition</b>—every match brings the <b>glory of real sports</b> to life.",
    image: IMAGES.SportsGamestat,
    video: VIDEOS.sportsGame
  },
  puzzleGame: {
    title: "Puzzle Game",
    description: "Twist your mind, <b>test your logic</b>, and unlock satisfaction with every <b>clever solution</b> that clicks into place.",
    image: IMAGES.PuzzleGamestat,
    video: VIDEOS.puzzleGame
  },
};
