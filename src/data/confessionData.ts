import { ConfessionPart, ConfirmationStep } from '@/types';

export const CONFESSION_PARTS: ConfessionPart[] = [
  {
    id: 1,
    content: "Hey Nasss, thank you for letting me be a part of your life once again.",
    buttonText: "Continue ♡",
  },
  {
    id: 2,
    content: "At first, I thought love wasn’t really that important to me back when we were in high school.",
    buttonText: "Next ♡",
  },
  {
    id: 3,
    content: "And I’m truly sorry for how I was back then... for not giving you the certainty and clarity you deserved, Nas.",
    buttonText: "Continue ♡",
  },
  {
    id: 4,
    content: "When we lost contact, I slowly realized just how much you actually meant to me.",
    buttonText: "Next ♡",
  },
  {
    id: 5,
    content: "You probably didn’t know this, but during those two years when we weren’t in contact, I talked about you to my friends so often.",
    image: "/gambar/twit2.jpeg",
    imageCaption: "Cerita tentang kamu ke temen-temenku...",
    buttonText: "Read more ♡",
  },
  {
    id: 6,
    content: "I was truly thinking about you all this time, Nasss... wondering how your days were going.",
    image: "/gambar/imissyou.png",
    imageCaption: "I really was thinking about you all this time...",
    buttonText: "Continue ♡",
  },
  {
    id: 7,
    content: "I still checked your playlists, and I still made secret playlists just for you.",
    image: "/gambar/playlist.png",
    imageCaption: "Playlist rahasia yang selalu ada nama kamu ♫",
    buttonText: "Next ♡",
  },
  {
    id: 8,
    content: "I was genuinely happy whenever you updated something on your second account, and I tweeted so much about you without you even knowing.",
    image: "/gambar/twit1.jpeg",
    imageCaption: "Tweet-tweet kecil yang sebenernya selalu tentang kamu...",
    buttonText: "Continue ♡",
  },
  {
    id: 9,
    content: "I think I fell way too deep.",
    emphasis: true,
    subtext: "— and every path kept leading straight back to you.",
    image: "/gambar/f7d10e36-d523-4e46-a3c5-50ccbcc8bd76.jpg",
    imageCaption: "Falling for you 💙",
    buttonText: "Keep reading ♡",
  },
  {
    id: 10,
    content: "Just like what the song says...",
    subtext: "“My love will always stay by you\nI'll keep it safe, so don't you worry a thing\nI'll tell you I love you more\nIt's stuck with you forever, so promise you won't let it go\nI'll trust the universe will always bring me to you”",
    emphasis: true,
    buttonText: "Continue ♡",
  },
  {
    id: 11,
    content: "And somewhere along the way, I realized that you mean so much more to me than I ever expected.",
    buttonText: "Next ♡",
  },
  {
    id: 12,
    content: "I really don’t want to lose you for the second time, Nasss.",
    buttonText: "Continue ♡",
  },
  {
    id: 13,
    content: "I feel like I’d regret it so much if I never told you how I truly feel.",
    buttonText: "Next ♡",
  },
  {
    id: 14,
    content: "Even if we had stayed out of contact back then, I think my heart would have still found its way to confess to you someday.",
    buttonText: "There's one more thing... ♡",
  },
];

export const FINAL_QUESTION_DATA = {
  intro: "This time, I just want to be honest with you.",
  question: "Would it be okay if I became your boyfriend, Nanasss?",
  yesButton: "Yes ♡",
  noButton: "No",
};

export const REJECTION_RESPONSES = [
  "Are you sure, Nasss? 🥺",
  "Hmm… think again 👀",
  "Really? You’re breaking my heart here 😭",
  "Wait... are you testing me, Nanasss? 🙈",
  "The Yes button is getting impossible to miss! 💙",
  "You know you want to press Yes... ✨",
  "My heart says you meant Yes! 💫",
];

export const CONFIRMATION_STEPS: ConfirmationStep[] = [
  {
    step: 1,
    question: "Are you sure, Nasss? 🥺",
    yesText: "Yes",
    noText: "No",
  },
  {
    step: 2,
    question: "Like… really sure? 👀",
    yesText: "Yes",
    noText: "No",
  },
  {
    step: 3,
    question: "Okay, but are you REALLY, REALLY sure? 💙",
    yesText: "YES, I’M SURE",
    noText: "No",
  },
];

export const CELEBRATION_DATA = {
  title: "Then it’s official. 💙",
  subtitle: "I’m your boyfriend now.",
  loveNote: "From high school memories, secret playlists, all the times I talked about you to my friends, and every moment I spent thinking about you — thank you for letting me back into your life, Nanasss. I promise to cherish and protect this love forever.",
  signature: "With all my love ♡",
};
