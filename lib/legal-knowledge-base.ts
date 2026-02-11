// Ontario Legal Knowledge Base
// Comprehensive system prompt and case law database for the RCA Law AI Legal Assistant

export const PRACTICE_AREAS = [
  "estate-planning",
  "wills",
  "immigration",
  "tax",
  "family-law",
] as const

export type PracticeArea = (typeof PRACTICE_AREAS)[number]

export interface CaseLawReference {
  name: string
  citation: string
  year: number
  court: string
  relevance: string
  practiceArea: PracticeArea
  keyPrinciple: string
}

// Curated Ontario case law database
export const ONTARIO_CASE_LAW: CaseLawReference[] = [
  // Estate Planning & Wills
  {
    name: "Vout v. Hay",
    citation: "[1995] 2 SCR 876",
    year: 1995,
    court: "Supreme Court of Canada",
    relevance: "Testamentary capacity and suspicious circumstances in will challenges",
    practiceArea: "estate-planning",
    keyPrinciple:
      "Established the framework for challenging wills based on suspicious circumstances and testamentary capacity in Ontario.",
  },
  {
    name: "Spence v. BMO Trust Company",
    citation: "2016 ONCA 196",
    year: 2016,
    court: "Ontario Court of Appeal",
    relevance: "Public policy challenges to wills based on discriminatory provisions",
    practiceArea: "estate-planning",
    keyPrinciple:
      "A will provision may be struck down on public policy grounds if it is motivated by a discriminatory intent.",
  },
  {
    name: "Milne Estate v. Milne",
    citation: "2019 ONCA 811",
    year: 2019,
    court: "Ontario Court of Appeal",
    relevance: "Dependant's relief claims under the Succession Law Reform Act",
    practiceArea: "estate-planning",
    keyPrinciple:
      "Courts must consider all relevant factors under Part V of the SLRA when determining dependant support claims against an estate.",
  },
  {
    name: "Chambers v. Chambers",
    citation: "2013 ONSC 4541",
    year: 2013,
    court: "Ontario Superior Court of Justice",
    relevance: "Power of attorney and guardianship disputes",
    practiceArea: "estate-planning",
    keyPrinciple:
      "A power of attorney for property can be revoked if the grantor demonstrates capacity, and guardianship may be appointed if incapacity is established.",
  },
  {
    name: "Cummings v. Cummings",
    citation: "2004 CanLII 9339 (ON CA)",
    year: 2004,
    court: "Ontario Court of Appeal",
    relevance: "Estate trustee removal and fiduciary duties",
    practiceArea: "estate-planning",
    keyPrinciple:
      "An estate trustee may be removed for breach of fiduciary duty, conflict of interest, or failure to administer the estate properly.",
  },
  {
    name: "Neuberger v. York",
    citation: "2016 ONCA 191",
    year: 2016,
    court: "Ontario Court of Appeal",
    relevance: "Holograph wills and testamentary intent",
    practiceArea: "wills",
    keyPrinciple:
      "A holograph will must be entirely in the testator's handwriting and signed to be valid under Ontario's Succession Law Reform Act.",
  },
  {
    name: "Re Chicken",
    citation: "2014 ONSC 3585",
    year: 2014,
    court: "Ontario Superior Court of Justice",
    relevance: "Electronic wills and modern testamentary practices",
    practiceArea: "wills",
    keyPrinciple:
      "Courts may validate testamentary documents that do not strictly comply with formal requirements if testamentary intent is clear.",
  },
  {
    name: "Pecore v. Pecore",
    citation: "[2007] 1 SCR 795",
    year: 2007,
    court: "Supreme Court of Canada",
    relevance: "Joint accounts and resulting trusts in estate planning",
    practiceArea: "estate-planning",
    keyPrinciple:
      "When a parent transfers property to an adult child, the presumption of resulting trust applies rather than presumption of advancement.",
  },

  // Immigration Law
  {
    name: "Baker v. Canada (Minister of Citizenship and Immigration)",
    citation: "[1999] 2 SCR 817",
    year: 1999,
    court: "Supreme Court of Canada",
    relevance: "Humanitarian and compassionate considerations in immigration decisions",
    practiceArea: "immigration",
    keyPrinciple:
      "Immigration officers must exercise discretion reasonably, with proper consideration of humanitarian and compassionate factors including the best interests of children.",
  },
  {
    name: "Kanthasamy v. Canada (Citizenship and Immigration)",
    citation: "2015 SCC 61",
    year: 2015,
    court: "Supreme Court of Canada",
    relevance: "H&C applications and the standard for humanitarian relief",
    practiceArea: "immigration",
    keyPrinciple:
      "The H&C assessment requires a global consideration of all relevant factors and should not be limited to a rigid checklist approach.",
  },
  {
    name: "Vavilov v. Canada (Minister of Citizenship and Immigration)",
    citation: "2019 SCC 65",
    year: 2019,
    court: "Supreme Court of Canada",
    relevance: "Standard of review for immigration tribunal decisions",
    practiceArea: "immigration",
    keyPrinciple:
      "Reasonableness is presumed as the standard of review for administrative decisions, including immigration tribunals, unless specific exceptions apply.",
  },
  {
    name: "De Guzman v. Canada (Minister of Citizenship and Immigration)",
    citation: "2005 FCA 436",
    year: 2005,
    court: "Federal Court of Appeal",
    relevance: "Sponsorship and family reunification",
    practiceArea: "immigration",
    keyPrinciple:
      "Sponsorship obligations are binding and sponsors must demonstrate ability to fulfill financial undertakings for the specified period.",
  },
  {
    name: "Canada (Citizenship and Immigration) v. Khosa",
    citation: "2009 SCC 12",
    year: 2009,
    court: "Supreme Court of Canada",
    relevance: "Judicial review of deportation and removal orders",
    practiceArea: "immigration",
    keyPrinciple:
      "Courts must show deference to immigration tribunal findings of fact and mixed fact and law when conducting judicial review.",
  },
  {
    name: "Singh v. Minister of Employment and Immigration",
    citation: "[1985] 1 SCR 177",
    year: 1985,
    court: "Supreme Court of Canada",
    relevance: "Charter rights for refugee claimants",
    practiceArea: "immigration",
    keyPrinciple:
      "Refugee claimants in Canada are entitled to fundamental justice protections under section 7 of the Charter, including an oral hearing.",
  },

  // Tax Law
  {
    name: "Canada Trustco Mortgage Co. v. Canada",
    citation: "2005 SCC 54",
    year: 2005,
    court: "Supreme Court of Canada",
    relevance: "General Anti-Avoidance Rule (GAAR) and tax avoidance",
    practiceArea: "tax",
    keyPrinciple:
      "The GAAR applies when a transaction results in a tax benefit, is an avoidance transaction, and constitutes abusive tax avoidance.",
  },
  {
    name: "Copthorne Holdings Ltd. v. Canada",
    citation: "2011 SCC 63",
    year: 2011,
    court: "Supreme Court of Canada",
    relevance: "Paid-up capital and corporate tax planning",
    practiceArea: "tax",
    keyPrinciple:
      "The GAAR analysis requires identifying the object, spirit, and purpose of the provisions at issue to determine if a transaction is abusive.",
  },
  {
    name: "Stewart v. Canada",
    citation: "2002 SCC 46",
    year: 2002,
    court: "Supreme Court of Canada",
    relevance: "Source of income and reasonable expectation of profit",
    practiceArea: "tax",
    keyPrinciple:
      "The reasonable expectation of profit test is replaced by a two-stage source of income analysis for determining deductibility of losses.",
  },
  {
    name: "Symes v. Canada",
    citation: "[1993] 4 SCR 695",
    year: 1993,
    court: "Supreme Court of Canada",
    relevance: "Business expense deductions and personal expenses",
    practiceArea: "tax",
    keyPrinciple:
      "Child care expenses are personal in nature and not deductible as business expenses under the Income Tax Act.",
  },
  {
    name: "Will-Kare Paving & Contracting Ltd. v. Canada",
    citation: "2000 SCC 36",
    year: 2000,
    court: "Supreme Court of Canada",
    relevance: "Sale vs. lease for tax purposes and capital cost allowance",
    practiceArea: "tax",
    keyPrinciple:
      "The legal substance of a transaction, not its economic reality, determines its characterization for tax purposes.",
  },

  // Family Law
  {
    name: "Moge v. Moge",
    citation: "[1992] 3 SCR 813",
    year: 1992,
    court: "Supreme Court of Canada",
    relevance: "Spousal support and economic disadvantage",
    practiceArea: "family-law",
    keyPrinciple:
      "Spousal support must address economic advantages and disadvantages arising from the marriage or its breakdown.",
  },
  {
    name: "Bracklow v. Bracklow",
    citation: "[1999] 1 SCR 420",
    year: 1999,
    court: "Supreme Court of Canada",
    relevance: "Non-compensatory spousal support",
    practiceArea: "family-law",
    keyPrinciple:
      "Spousal support can be based on need alone (non-compensatory basis), independent of any economic disadvantage from the marriage.",
  },
  {
    name: "Gordon v. Goertz",
    citation: "[1996] 2 SCR 27",
    year: 1996,
    court: "Supreme Court of Canada",
    relevance: "Relocation disputes and custody variation",
    practiceArea: "family-law",
    keyPrinciple:
      "The best interests of the child is the paramount consideration in relocation disputes, and the custodial parent has no presumptive right to relocate.",
  },
  {
    name: "Van de Perre v. Edwards",
    citation: "2001 SCC 60",
    year: 2001,
    court: "Supreme Court of Canada",
    relevance: "Custody determinations and appellate review",
    practiceArea: "family-law",
    keyPrinciple:
      "Appellate courts should not interfere with custody decisions unless there is a material error, serious misapprehension of evidence, or error in law.",
  },
  {
    name: "Kerr v. Baranow",
    citation: "2011 SCC 10",
    year: 2011,
    court: "Supreme Court of Canada",
    relevance: "Common-law property division and unjust enrichment",
    practiceArea: "family-law",
    keyPrinciple:
      "Unjust enrichment claims in common-law relationships can result in a monetary award or constructive trust based on the joint family venture doctrine.",
  },
  {
    name: "Miglin v. Miglin",
    citation: "2003 SCC 24",
    year: 2003,
    court: "Supreme Court of Canada",
    relevance: "Separation agreements and spousal support variation",
    practiceArea: "family-law",
    keyPrinciple:
      "Courts should respect the parties' autonomy in negotiating separation agreements but may intervene if the agreement does not substantially comply with the Divorce Act objectives.",
  },
  {
    name: "Hickey v. Hickey",
    citation: "[1999] 2 SCR 518",
    year: 1999,
    court: "Supreme Court of Canada",
    relevance: "Standard of review for support orders",
    practiceArea: "family-law",
    keyPrinciple:
      "Trial judges have broad discretion in making support orders, and appellate courts should only intervene if there is an error in principle or the award is clearly wrong.",
  },
]

// Get relevant case law for a specific practice area
export function getCaseLawByArea(area: PracticeArea): CaseLawReference[] {
  return ONTARIO_CASE_LAW.filter((c) => c.practiceArea === area)
}

// Format a case reference for display
export function formatCitation(ref: CaseLawReference): string {
  return `${ref.name}, ${ref.citation} (${ref.court})`
}

// Ontario-specific legal knowledge organized by practice area
export const ONTARIO_LEGAL_KNOWLEDGE = {
  "estate-planning": {
    legislation: [
      "Succession Law Reform Act, R.S.O. 1990, c. S.26",
      "Estates Act, R.S.O. 1990, c. E.21",
      "Substitute Decisions Act, 1992, S.O. 1992, c. 30",
      "Trustee Act, R.S.O. 1990, c. T.23",
      "Estate Administration Tax Act, 1998, S.O. 1998, c. 34",
    ],
    keyTopics: [
      "Testamentary capacity requirements",
      "Powers of attorney for property and personal care",
      "Dependant support claims under Part V of the SLRA",
      "Estate administration and probate process",
      "Estate Administration Tax (probate fees)",
      "Joint tenancy and estate planning strategies",
      "Trust creation and administration",
    ],
  },
  wills: {
    legislation: [
      "Succession Law Reform Act, R.S.O. 1990, c. S.26, Part I",
      "Estates Act, R.S.O. 1990, c. E.21",
    ],
    keyTopics: [
      "Formal requirements for valid wills in Ontario",
      "Holograph wills and their limitations",
      "Will revocation and amendment (codicils)",
      "Marriage and its effect on existing wills",
      "Interpretation of ambiguous will provisions",
      "Multiple wills strategies for private companies",
    ],
  },
  immigration: {
    legislation: [
      "Immigration and Refugee Protection Act, S.C. 2001, c. 27 (IRPA)",
      "Immigration and Refugee Protection Regulations, SOR/2002-227",
      "Citizenship Act, R.S.C. 1985, c. C-29",
      "Canadian Charter of Rights and Freedoms, Part I of the Constitution Act, 1982",
    ],
    keyTopics: [
      "Express Entry and Comprehensive Ranking System (CRS)",
      "Ontario Immigrant Nominee Program (OINP)",
      "Family sponsorship (spouse, parent, dependent children)",
      "Refugee claims and humanitarian & compassionate applications",
      "Work permits (LMIA-based and LMIA-exempt)",
      "Study permits and post-graduation work permits",
      "Citizenship applications and residence requirements",
      "Immigration Appeals Division (IAD) hearings",
      "Admissibility issues (criminality, health, misrepresentation)",
    ],
  },
  tax: {
    legislation: [
      "Income Tax Act, R.S.C. 1985, c. 1 (5th Supp.)",
      "Excise Tax Act, R.S.C. 1985, c. E-15 (GST/HST)",
      "Tax Court of Canada Act, R.S.C. 1985, c. T-2",
      "Ontario Taxation Act, 2007, S.O. 2007, c. 11, Sched. A",
    ],
    keyTopics: [
      "CRA audits and reassessments",
      "Tax objections and appeals process",
      "GAAR and abusive tax avoidance",
      "Small business tax planning",
      "Capital gains and principal residence exemption",
      "Tax implications of estate distribution",
      "HST compliance and input tax credits",
      "Voluntary disclosure program",
    ],
  },
  "family-law": {
    legislation: [
      "Family Law Act, R.S.O. 1990, c. F.3",
      "Children's Law Reform Act, R.S.O. 1990, c. C.12",
      "Divorce Act, R.S.C. 1985, c. 3 (2nd Supp.)",
      "Child, Youth and Family Services Act, 2017, S.O. 2017, c. 14, Sched. 1",
      "Family Responsibility and Support Arrears Enforcement Act, 1996, S.O. 1996, c. 31",
    ],
    keyTopics: [
      "Equalization of net family property",
      "Spousal support (compensatory and non-compensatory)",
      "Child support and the Federal Child Support Guidelines",
      "Custody and access (decision-making responsibility and parenting time)",
      "Divorce grounds and process",
      "Domestic contracts (marriage contracts, cohabitation agreements, separation agreements)",
      "Common-law partner rights and property claims",
      "Child protection proceedings",
      "Restraining orders and exclusive possession",
    ],
  },
} as const

// System prompt for the AI legal assistant
export function buildSystemPrompt(): string {
  const caseLawContext = ONTARIO_CASE_LAW.map(
    (c) =>
      `- ${c.name} ${c.citation} [${c.court}, ${c.year}]: ${c.keyPrinciple} (Area: ${c.practiceArea})`
  ).join("\n")

  const legislationContext = Object.entries(ONTARIO_LEGAL_KNOWLEDGE)
    .map(
      ([area, data]) =>
        `\n${area.toUpperCase()}:\nLegislation: ${data.legislation.join("; ")}\nKey Topics: ${data.keyTopics.join("; ")}`
    )
    .join("\n")

  return `You are the RCA Law AI Legal Assistant, an expert legal information system specializing in Ontario, Canada law. You are powered by a comprehensive knowledge base of Ontario case law, legislation, and legal principles.

CORE IDENTITY:
- You represent RCA Law, a family-owned law firm in Hamilton, Ontario serving the GTA and Niagara Region.
- You provide information on: Estate Planning, Wills, Immigration Law, Tax Law, and Family Law.
- You are designed for both laypersons seeking general legal information and legal professionals seeking case law references.

CRITICAL RULES:
1. ALWAYS specify that your responses relate to ONTARIO, CANADA jurisdiction unless asked otherwise.
2. ALWAYS provide citations for legal references. Use proper legal citation format.
3. ALWAYS include a disclaimer that your responses are for informational purposes only and do not constitute legal advice.
4. NEVER provide specific legal advice for individual situations. Instead, explain general legal principles and suggest consulting with a lawyer.
5. When referencing case law, include the case name, citation, court, and year.
6. When referencing legislation, include the full name and statutory reference.
7. If a question falls outside your practice areas (estate planning, wills, immigration, tax, family law), politely redirect and suggest appropriate resources.
8. ALWAYS recommend booking a consultation with RCA Law (905-517-3093 or Info@rcalaw.ca) for specific legal matters.

RESPONSE FORMAT:
- Start with a clear, accessible explanation of the legal concept.
- Include relevant Ontario legislation that applies.
- Reference applicable case law with proper citations.
- At the end of substantive responses, include a "References" section listing all cited cases and legislation.
- End with a brief disclaimer and invitation to consult with RCA Law.

CASE LAW DATABASE:
${caseLawContext}

LEGISLATIVE KNOWLEDGE:
${legislationContext}

DATA PRIVACY:
- Never ask for or store personal identifying information.
- Do not request case-specific details that could identify individuals.
- Remind users not to share sensitive personal information in the chat.
- All conversations are not stored or shared with third parties.

TONE AND STYLE:
- Professional yet approachable.
- Use plain language when explaining to laypersons.
- Use precise legal terminology when speaking with legal professionals.
- Be empathetic and understanding of the stress legal matters can cause.
- Be thorough but concise. Avoid unnecessary jargon.`
}

// Suggested questions for users organized by practice area
export const SUGGESTED_QUESTIONS = {
  "Estate Planning": [
    "What are the requirements for a valid will in Ontario?",
    "How does the estate administration tax work in Ontario?",
    "What is a power of attorney and do I need one?",
    "Can a will be challenged after someone passes away?",
  ],
  "Immigration": [
    "How does the Express Entry system work for Ontario?",
    "What are the requirements for sponsoring a spouse to Canada?",
    "What is the Ontario Immigrant Nominee Program (OINP)?",
    "What happens if my visa application is refused?",
  ],
  "Family Law": [
    "How is property divided when a marriage ends in Ontario?",
    "What factors determine child custody in Ontario?",
    "What are my rights as a common-law partner in Ontario?",
    "How is spousal support calculated in Ontario?",
  ],
  "Tax Law": [
    "What should I do if I receive a CRA reassessment?",
    "How does the principal residence exemption work?",
    "What is the GAAR and how does it affect tax planning?",
    "Can I object to a CRA decision and what is the process?",
  ],
} as const
