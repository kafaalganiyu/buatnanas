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
    content: "But when we lost contact, I slowly realized how much it actually meant to me.",
    buttonText: "Continue ♡",
  },
  {
    id: 4,
    content: "You probably don’t know this, but during those two years when we weren’t in contact, I still checked your playlists.",
    buttonText: "Read more ♡",
  },
  {
    id: 5,
    content: "I still made playlists for you, even when you didn’t know about them.",
    buttonText: "Next ♡",
  },
  {
    id: 6,
    content: "I was genuinely happy whenever you updated something on your second account, and I tweeted so much about you without you even knowing.",
    buttonText: "Continue ♡",
  },
  {
    id: 7,
    content: "I think I fell way too deep.",
    emphasis: true,
    subtext: "— and there was no turning back.",
    buttonText: "Keep reading ♡",
  },
  {
    id: 8,
    content: "And somewhere along the way, I realized that you mean so much more to me than I ever expected.",
    buttonText: "Continue ♡",
  },
  {
    id: 9,
    content: "I really don’t want to lose you for the second time.",
    buttonText: "Next ♡",
  },
  {
    id: 10,
    content: "I feel like I’d regret it so much if I never told you how I feel.",
    buttonText: "Continue ♡",
  },
  {
    id: 11,
    content: "Even if we had stayed out of contact back then, I think I would’ve still confessed to you someday.",
    buttonText: "There's one more thing... ♡",
  },
];

export const FINAL_QUESTION_DATA = {
  intro: "This time, I just want to be honest with you.",
  question: "Would it be okay if I became your boyfriend?",
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
  subtitle: "You’re my boyfriend now.",
  loveNote: "From high school memories to quiet playlists and every unspoken thought in between — thank you for being you. Here's to our chapter together.",
  signature: "With all my love ♡",
};
