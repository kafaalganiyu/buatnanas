import { ConfessionPart, ConfirmationStep } from '@/types';

export const CONFESSION_PARTS: ConfessionPart[] = [
  {
    id: 1,
    content: "Thank you for letting me be a part of your life once again.",
    buttonText: "Continue ♡",
  },
  {
    id: 2,
    content: "At first, I thought love wasn’t really that important to me back when we were in high school.",
    buttonText: "Next ♡",
  },
  {
    id: 3,
    content: "And I’m truly sorry for how I was back then... for not giving you the certainty and clarity you deserved.",
    buttonText: "Continue ♡",
  },
  {
    id: 4,
    content: "When we lost contact, I slowly realized how much you actually meant to me.",
    buttonText: "Next ♡",
  },
  {
    id: 5,
    content: "You probably didn’t know this, but during those two years when we weren’t in contact, I talked about you to my friends so often.",
    image: "/gambar/WhatsApp Image 2026-08-20 at 01.28.31.jpeg",
    imageCaption: "Selalu ceritain tentang kamu...",
    buttonText: "Read more ♡",
  },
  {
    id: 6,
    content: "I was truly thinking about you all this time, wondering how your days were going.",
    image: "/gambar/WhatsApp Image 2026-08-20 at 01.28.50.jpeg",
    imageCaption: "Bener-bener selalu kepikiran kamu...",
    buttonText: "Continue ♡",
  },
  {
    id: 7,
    content: "I still checked your playlists, and I still made secret playlists just for you.",
    image: "/gambar/Screenshot 2026-08-20 012149.png",
    imageCaption: "Playlist yang selalu buat kamu ♫",
    buttonText: "Next ♡",
  },
  {
    id: 8,
    content: "I was genuinely happy whenever you updated something on your second account, and I tweeted so much about you without you even knowing.",
    image: "/gambar/Screenshot 2026-08-20 012331.png",
    imageCaption: "Every little thought was about you...",
    buttonText: "Continue ♡",
  },
  {
    id: 9,
    content: "I think I fell way too deep.",
    emphasis: true,
    subtext: "— and every thought kept leading back to you.",
    image: "/gambar/f7d10e36-d523-4e46-a3c5-50ccbcc8bd76.jpg",
    imageCaption: "Falling for you 💙",
    buttonText: "Keep reading ♡",
  },
  {
    id: 10,
    content: "And somewhere along the way, I realized that you mean so much more to me than I ever expected.",
    buttonText: "Continue ♡",
  },
  {
    id: 11,
    content: "I really don’t want to lose you for the second time.",
    buttonText: "Next ♡",
  },
  {
    id: 12,
    content: "I feel like I’d regret it so much if I never told you how I truly feel.",
    buttonText: "Continue ♡",
  },
  {
    id: 13,
    content: "Even if we had stayed out of contact back then, I think I would’ve still confessed to you someday.",
    buttonText: "There's one more thing... ♡",
  },
];

export const FINAL_QUESTION_DATA = {
  intro: "This time, I just want to be honest with you.",
  question: "Would it be okay if I became your girlfriend?",
  yesButton: "Yes ♡",
  noButton: "No",
};

export const REJECTION_RESPONSES = [
  "Are you sure? 🥺",
  "Hmm… think again 👀",
  "Really? You’re breaking my heart here 😭",
  "Wait... are you testing me? 🙈",
  "The Yes button is getting impossible to miss! 💙",
  "You know you want to press Yes... ✨",
  "My heart says you meant Yes! 💫",
];

export const CONFIRMATION_STEPS: ConfirmationStep[] = [
  {
    step: 1,
    question: "Are you sure? 🥺",
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
  subtitle: "I’m your girlfriend now.",
  loveNote: "From high school memories, quiet playlists, and all the times I talked about you to my friends — thank you for letting me back into your life. I promise to cherish you always.",
  signature: "With all my love ♡",
  galleryImages: [
    "/gambar/f7d10e36-d523-4e46-a3c5-50ccbcc8bd76.jpg",
    "/gambar/Screenshot 2026-08-20 012149.png",
    "/gambar/WhatsApp Image 2026-08-20 at 01.28.31.jpeg",
  ],
};
