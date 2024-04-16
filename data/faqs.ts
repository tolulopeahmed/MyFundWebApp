type FAQItem = {
  question: string;
  answer: string;
};

const FAQs: Array<FAQItem> = [
  {
    question: "What exactly is MyFund?",
    answer:
      "MyFund is a financial intelligence app (by ValuePlus) that helps you develop yourself, grow your funds (save) and acquire assets (invest) with ease. You learn what takes to manage your assets yourself in the app’s financial intelligence section called the “Wealth Leadership Academy”.",
  },
  {
    question: "What is the minimum amount for Investment?",
    answer:
      "The minimum Investment varies based on value appreciation per share which shows profit made in the quarter before. The current minimum amount for investment is a multiple of N60,000. You can also choose to move your funds from Savings to Investments when it is up to N60,000.",
  },
  {
    question: "What is the minimum amount for monthly savings?",
    answer:
      "At the moment, you can save any amount you wish. But we encourage that it's not less than N5,000 in a month.",
  },
  {
    question:
      "What exactly is MyFund Fractional Ownership Investment (FOI) Plan?",
    answer:
      "MyFund is building Hostels across campuses starting with MyFund Hostels at the Federal University of Agriculture, Abeokuta (FUNAAB). Users are given the opportunity to own fractions of the asset and earn lifetime rent (passive income) with the Deed of Agreement. Go to bit.ly/f90percent to begin.",
  },
  {
    question:
      "Can I convert my savings or investments in my account (MyFund) to any of the four FOI Plans when they have grown enough for an FOI Plan?",
    answer:
      "Yes. Simply write to myfundmobile@gmail.com or message admin to request for your savings/investment to be converted to any of the 4 FOI Plans and an invoice will be sent to you. A Deed of Agreement will follow after your payment is confirmed. Go to http://bit.ly/f90percent for details.",
  },
  {
    question: "What are the four Fractional Ownership Investment Plans?",
    answer:
      "1. Standard 2.5 (Sponsor with 2.5m, earn 450k for 10 years). 2. Standard 5.0 (Sponsor with 5m, earn 450k for 10 years). 3. Premium 2.5 (Own with 2.5m, earn 175k annually for life). 4. Premium 5.0 (Own with 5m, earn 350k annually for life). Go to http://bit.ly/f90percent to start.",
  },
  {
    question: "Can I live in any of the apartments if I choose?",
    answer:
      "Yes. But this option is only available for the Premium plans (which grant ownership). Also, the management of the apartment is done by MyFund. This also means that except you choose to pay the rent due to the apartment, your annual payment from MyFund will stop. See the DOA for details.",
  },
  {
    question: "Can I transfer my earnings to my children when I'm gone?",
    answer:
      "Sure! The FOI Premium plans is an asset that's in your name. The earning default to your next of kin in the event of your death. See more details in the Deed of Agreement.",
  },
  {
    question: "How do I purchase an FOI Plan?",
    answer:
      "To acquire any of the FOI Plans, either 1. Send a mail to myfundmobile@gmail.com or message admin to request a particular plan. or 2. Go to http://bit.ly/f90percent",
  },
  {
    question: "Can I refer others and earn from the FOI plans?",
    answer:
      "Yes. A commission of up to 5% is given to every referral completed by you. You however should be a registered and active user of MyFund because all rewards are paid to each user's wallet after they've been confirmed as the referral by the client.",
  },
  {
    question: "How much commission is earned on referring the FOI plans?",
    answer: "The commission on all FOI plans for active users of MyFund is 5%.",
  },
  {
    question:
      "Why is the ROI fixed for life? What if the value of the currency diminishes as the years go by? Why can't the ROI simply be a percentage of the actual rent?",
    answer:
      "We can either guarantee a fixed income or be flexible as per market realities. Our guarantee shields you from negative market/management costs. But if we remove our guarantee, then we must share the risk. i.e. you earn the rent due to you (minus management fees) & your income increase with rent.",
  },
  {
    question: "Where are the Property Investments (or Assets)?",
    answer:
      "We're building hostels and housing across campuses and high traffic areas in the country. The ongoing investment plan is at Harmony Estate, opposite the Federal University of Agriculture Abeokuta (FUNAAB), Ogun State...with 41 apartments, 1 buttery and a 100-seater event centre.",
  },
  {
    question:
      "If I default in paying my savings in a particular month, can I pay arrears in the next month?",
    answer:
      "No, you cannot pay in arrears; whichever month's savings was not made is gone. You're just advised to continue with subsequent months or turn ON autosave. If, however, you don’t save for 3 consecutive months, your account goes dormant and you’ll have to reactivate to continue.",
  },
  {
    question:
      "Can I increase/upgrade my monthly savings? What are the requirements to effect that?",
    answer:
      "Yes, monthly savings can be increased or upgraded. You can increase the amount you choose to save at any time. But the minimum in a month is N5000",
  },
  {
    question: "Can I reduce my monthly savings in any month?",
    answer:
      "Yes, you can, but the minimum savings we encourage in any month remains N5,000. Which means you can save a number of times, but ensure they've accumulated to at least N5000 before the next month.",
  },
  {
    question: "What Exactly is the Wealth Leadership Academy?",
    answer:
      "The Wealth Leadership Academy (WLA) is a 1-year Financial Intelligence Training (and Tracking) system for all registered users of MyFund. It’s the main part of every new member’s Starter Pack. You participate in the training by submitting your assignments and passing the final exams.",
  },
  {
    question: "When do I receive dividends on my Investment?",
    answer:
      "Dividends on Investments are currently declared at the middle (July) and end of the year (December). But will become more frequent as the platform grows. You earn dividends on your investment in your Wallet. From which you can move to your local bank account.",
  },
  {
    question: "How do I increase my rank?",
    answer:
      "Your rank increases with the number of referrals you make. *Rank 1 = Newly Registered (20%). *Rank 2 = 10 referrals+ (25%). *Rank 3 = 30 referrals+ (35%). *Rank 4 = 65 referrals+ (40%). *Rank 5 = 100 referrals+ (45%). This corresponds to your earnings/discounts (except when there's a promo)",
  },
  {
    question: "How do I Earn Extra Income using MyFund?",
    answer:
      "(1.) REFERRALS—You earn your rank % on your referrals who... (a.) sign up with your link/username (b.) buy secondary products of ValuePlus. (2.) PROMOS—Participate and win. (3.) ROI—You also earn up 12% ROI on your investments at the end of the year. All payments go to your Wallet.",
  },
  {
    question: "I want to withdraw immediately. What is the break fee?",
    answer:
      "Withdrawals take time because the funds are usually tied up in investments per time. Immediate withdrawal, however, attracts a break fee of 10% of the amount requested if SAVINGS, 15% if from INVESTMENTS and 0% if from WALLET...to be processed for you without the waiting period.",
  },
  {
    question: "Who owns MyFund?",
    answer:
      "MyFund is owned by the members, but coordinated by the executive members of ValuePlus. See more details on the About Us page.",
  },
  {
    question: "Can I make savings automatically from my bank account?",
    answer:
      "Yes, this is called AUTOSAVE and is encouraged to avoid dormancy or the need for reactivation. You can set your debit card to be automatically debited every month and be credited into your savings account.",
  },
  {
    question: "Why is Autosave encouraged over Quicksave?",
    answer:
      "Autosave is encouraged in order to help the user become consistent with savings/investments as well as avoid dormancy or the need for reactivation. With autosave ON, you can confidently say I save every month/week!",
  },
  {
    question: "Can I participate in Investments anytime?",
    answer:
      "Though you can make payment at any month of the year, the funds will be processed in the next investment month. The Investment months are: January, April, July and October. It's from any of these months your dividends would be calculated for declaration by year end.",
  },
  {
    question:
      "Why does my account go dormant If I don't save at least N5000 for 3 months?",
    answer:
      "This is to encourage and instill a SAVING CULTURE; because It takes just that time to loose interest in saving altogether. It cost 10% of registration fee (i.e. N500) to reactivate.",
  },
  {
    question:
      "Can I be a part of MyFund and not distribute any secondary product/service of ValuePlus?",
    answer:
      "Yes, you can join MyFund directly using another member’s referral code/username or otherwise. You get your unique referral code/username after your account is activated. Referring the secondary products of ValuePlus is entirely by choice for those interested in extra income.",
  },
  {
    question:
      "Apart from registration fee for Starter Pack and WLA, are there any other charges to be paid?",
    answer:
      "If your account becomes dormant for three consecutive months, you’ll need to reactivate (N500) to continue saving. Or if you insist on withdrawing your Savings/Investment without allowing the waiting period (90days). Apart from these, there are no other charges to be paid.",
  },
  {
    question:
      "Does the platfom have regular meetings where we receive updates? If yes, how often?",
    answer:
      "Yes. The platform holds regular trainings (at least twice a month) for its members at the Wealth Leadership Academy. Also, updates are sent directly to user's account and accessible via the message section (and an email alert). A user can also message admin directly using the same channel.",
  },
  {
    question: "Can I get loans from the platform?",
    answer:
      "Yes. But not for the first two years of the platform. For short-term projects, loan is encouraged, but your savings and investments are primarily for acquiring assets. You qualify for a loan after 6 months of making consistent savings.",
  },
  {
    question: "Can I make bulk payments in advance for monthly savings?",
    answer:
      "Yes, bulk payments can be made in advance for monthly savings. Simply state how you want it credited for you in the message section provided in the savings request page.",
  },
  {
    question:
      "How long does it take to withdraw my money from investment without quitting MyFund?",
    answer:
      "To withdrawal from investment without closing your account, simply send a mail to myfundmobile@gmail.com. Note, however, that it takes 90 days for the funds to be released to you as funds are usually tied up in investment per time.",
  },
  {
    question: "How do I exit MyFund?",
    answer:
      "Exiting from MyFund is equivalent to closing your account and moving your funds. To do this, simply go into your account. Then go to Settings > Account Settings. At the bottom of the page, you'll find an option to exit MyFund and move your funds to your local account.",
  },
  {
    question: "How much time notice do I give if I want to exit MyFund?",
    answer:
      "You need to give a minimum of 90 days' (3 months') notice to Admin to allow for proper account collation and records. If however you insist on withdrawing your funds immediately (whole or part), you'll be charged 10% of funds you're requesting.",
  },
  {
    question: "What is the service charge to be paid on loan?",
    answer:
      "The service charge to be paid on loan is 1% per month (or 12% per annum).",
  },
  {
    question:
      "What exactly is MyFund investing in? Can I choose my Investment vehicle?",
    answer:
      "For now, all investments go into the same investment vehicle. But the focus of MyFund is on (1.) Real Estate (2.) Agriculture and (3.) Oil and Gas. Possibly, with time, options can exist where members can choose which of these vehicles they prefer their investments.",
  },
  {
    question: "Can I add to my Investments? If yes, how often?",
    answer:
      "Yes, you can add to your Fractional Investment at any time (a multiple of N60,000). It will however be processed for you in any of the 4months stated for processing: January, April, July and October.",
  },
  {
    question:
      "What is the penalty for inconsistent payment of monthly savings?",
    answer:
      "Apart from dormancy and the need for reactivation, inconsistent payment of monthly savings will simply affect the value of money you will receive during profit sharing and ease of loan processing.",
  },
  {
    question: "What does Fractional Investment mean?",
    answer:
      "This is the ownership of a fraction of a real estate investment. This is achieved when members' funds are pooled together towards a big deal. When the property is rented out or sold, members get returns at the end of the year in their Wallets based on what they have in investments.",
  },
  {
    question:
      "If I've cumulatively saved up to N60,000 in my Savings, can I move it to Investment?",
    answer:
      "Yes. Updates from time to time encourage members who are interested in moving their savings into investments to do so. At such times, cooperators who have saved up to the minimum Investment or a multiple can do so. This also means you'll start making your savings afresh.",
  },
  {
    question: "What is the interest rate/ROI on Investment?",
    answer:
      "There's no fixed interest rate/ROI on Investment at the moment. ROIs are based on profits made from businesses/investments made with our funds. There is no guaranteed income. Users can expect between 0—12% per annum. This is expected to increase as we grow stronger.",
  },
];

export default FAQs;
