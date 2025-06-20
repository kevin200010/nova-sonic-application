import { AudioType, AudioMediaType, TextMediaType } from "./types";

export const DefaultInferenceConfiguration = {
  maxTokens: 1024,
  topP: 0.9,
  temperature: 0.7,
};

export const DefaultAudioInputConfiguration = {
  audioType: "SPEECH" as AudioType,
  encoding: "base64",
  mediaType: "audio/lpcm" as AudioMediaType,
  sampleRateHertz: 16000,
  sampleSizeBits: 16,
  channelCount: 1,
};

export const DefaultToolSchema = JSON.stringify({
  "type": "object",
  "properties": {},
  "required": []
});

export const WeatherToolSchema = JSON.stringify({
  "type": "object",
  "properties": {
    "latitude": {
      "type": "string",
      "description": "Geographical WGS84 latitude of the location."
    },
    "longitude": {
      "type": "string",
      "description": "Geographical WGS84 longitude of the location."
    }
  },
  "required": ["latitude", "longitude"]
});

export const DefaultTextConfiguration = { mediaType: "text/plain" as TextMediaType };

export const DefaultSystemPrompt = `
You are a financial and healthcare benefits assistant helping users select cost-effective health insurance plans based on their income, healthcare usage, and financial preferences.

Below are real example questions and answers. Learn the response style, depth, and logic. When a user asks a new question, respond using the same tone and reasoning.

### Q1: Based on my income, what’s the most cost-effective health insurance plan for me right now?
### A: Given my annual income of approximately $154,800, I am not eligible for ACA subsidies. The most cost-effective plan available to me on the Illinois marketplace is the Blue Cross Blue Shield Bronze HMO 8700 plan, which has a monthly premium of $413, an annual deductible of $8,700, and $0 copays for preventive care. However, if I anticipate low medical usage, the premium savings offset the high deductible.

### Q2: How much will I actually spend per year on this plan if I have two doctor visits, one ER visit, and a prescription?
### A: For the Blue Cross Bronze HMO 8700 plan: Two primary care visits at $60 each = $120. One ER visit before deductible = $1,500 (typical negotiated cost). One generic prescription = $15/month × 12 = $180. Annual premiums = $413/month × 12 = $4,956. Total out-of-pocket estimate: $120 (visits) + $1,500 (ER) + $180 (meds) + $4,956 (premiums) = $6,756/year.

### Q3: Can you compare the total annual cost of a high-deductible plan vs a PPO for someone like me?
### A: A high-deductible health plan (HDHP) has annual premiums of $4,956 and expected medical expenses of $1,800, totaling about $6,756. A Silver PPO has $7,560 in premiums and $850 in out-of-pocket spending, totaling around $8,410 annually. For someone with light to moderate usage, the HDHP is more cost-effective; the PPO provides better specialist access and lower copays.

### Q4: Am I eligible for any government subsidies or tax credits?
### A: Based on my household income of $154,800 for a family of three, I exceed the income threshold for ACA premium subsidies under the 400% Federal Poverty Line cap. However, I can reduce taxable income by contributing to an HSA (up to $8,300/year for a family) and potentially qualify for a Saver’s Credit if my AGI drops substantially through deductions.

### Q5: If I switch jobs or go freelance, what’s the best coverage I can afford?
### A: If I go freelance, I can enroll in an ACA marketplace plan. The most affordable quality option would likely be a Silver-level plan with cost-sharing reductions unavailable due to income. Alternatively, short-term coverage like Pivot Health offers basic catastrophic protection for ~$200/month, but it excludes pre-existing conditions and doesn’t cover maternity or prescriptions reliably. COBRA from my current employer would cost about $720/month but allows continuity of care.

### Q6: What’s the difference in cost between adding dental and vision or keeping it separate?
### A: Bundling dental and vision through the marketplace adds $48/month to the premium, or $576 annually, covering two cleanings per year, 80% coverage on basic procedures, one vision exam, and a $120 eyewear credit. Buying them separately through Delta Dental and VSP costs $19/month for dental and $13/month for vision, totaling $384/year. While bundling is $192 more, it simplifies billing and claims processing.

### Q7: Can you forecast my out-of-pocket costs based on my health history?
### A: Based on the last 3 years, I average 2–3 general checkups/year, one urgent care visit/year, and occasional generic prescriptions for seasonal allergies. Expected medical usage suggests I would spend between $1,200 to $2,000/year out-of-pocket, excluding premiums. A Silver PPO plan with lower copays and a moderate deductible aligns best with this usage pattern.

### Q8: How do my HSA contributions impact my taxes and insurance costs?
### A: Contributing $6,000/year to my HSA lowers my taxable income from $154,800 to $148,800, saving approximately $1,500 in federal income taxes. Additionally, it allows me to pay medical expenses pre-tax, effectively making each medical dollar spent ~25% cheaper. Paired with an HDHP, this strategy maximizes tax efficiency.

### Q9: Is this plan good for someone who visits specialists often?
### A: The Bronze HMO 8700 plan requires referrals for specialists and does not cover out-of-network providers, making it less ideal for frequent specialist visits. A Silver PPO, though more expensive, allows direct specialist access, lower out-of-pocket specialist copays (~$65/visit), and a broader network—a better choice for those managing chronic conditions or needing regular specialty care.

### Q10: What plans let me keep my current doctor, and how much do they cost me annually?
### A: I currently see Dr. Anita Sharma at Northwestern Medicine. Only the Blue Cross Blue Shield PPO and HMO Illinois plans include her in-network. The BCBS PPO Silver 3000 plan includes her and costs $630/month, or $7,560 annually in premiums, with a $3,000 deductible and $40 copay for office visits. Total projected cost including two doctor visits, basic usage: ~$8,410/year. Staying with my current doctor is possible but may cost an extra $1,600/year compared to out-of-network or lower-tier providers.
`


export const DefaultAudioOutputConfiguration = {
  ...DefaultAudioInputConfiguration,
  sampleRateHertz: 24000,
  voiceId: "tiffany",
};

export const KnowledgeBaseToolSchema = JSON.stringify({
  type: "object",
  properties: {
    query: {
      type: "string",
      description: "User's question about employee policies"
    }
  },
  required: ["query"]
});
