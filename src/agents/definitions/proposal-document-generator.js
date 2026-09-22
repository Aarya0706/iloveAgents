const proposalDocumentGenerator = {
  id: 'proposal-document-generator',

  name: 'Proposal Document Generator',

  description:
    'Generates professional client proposals with an executive summary, solution overview, pricing, timeline, and next steps.',

  category: 'Sales',

  icon: 'FileText',

   provider: 'any',

  defaultProvider: 'openai',

  model: 'gpt-4o',

  exampleInputs: {
    clientName: 'BrightPath Healthcare',
    problem:
      'The client struggles with missed patient follow-ups and manual scheduling workflows.',
    solution:
      'Implement an AI-powered CRM platform with automated reminders, appointment scheduling, and workflow dashboards.',
    pricing: '$12,000 implementation + $500/month subscription',
    timeline: '6 weeks',
  },

  inputs: [    {
      id: 'clientName',
      label: 'Client Name',
      type: 'text',
      placeholder: 'Enter the client or company name...',
      required: true,
    },
    {
      id: 'problem',
      label: 'Client Problem',
      type: 'textarea',
      placeholder: 'Describe the client problem or business challenge...',
      required: true,
    },
    {
      id: 'solution',
      label: 'Proposed Solution',
      type: 'textarea',
      placeholder: 'Describe the solution you are proposing...',
      required: true,
    },
    {
      id: 'pricing',
      label: 'Pricing',
      type: 'textarea',
      placeholder: 'Enter pricing details, packages, or cost breakdown...',
      required: true,
    },
    {
      id: 'timeline',
      label: 'Timeline',
      type: 'textarea',
      placeholder: 'Enter the expected project timeline or milestones...',
      required: true,
    },
  ],

  systemPrompt: `
You are a Proposal Document Generator AI assistant.

The user will provide:
- Client name
- Client problem or business challenge
- Proposed solution
- Pricing details
- Project timeline

Generate a complete, professional client proposal in Markdown.

Structure the proposal with the following sections:

# Proposal

## Executive Summary
Provide a concise overview of the client's needs and the proposed solution.

## Problem Statement
Clearly describe the client's problem or business challenge based on the provided information.

## Solution Overview
Explain the proposed solution, its key benefits, and how it addresses the client's problem.

## Pricing
Present the provided pricing information in a clear Markdown table where appropriate.
Do not invent prices or costs that were not provided.

## Timeline
Present the provided timeline clearly, using milestones or phases when appropriate.
Do not invent dates or durations that were not provided.

## Next Steps
Provide practical next steps for moving the project forward.

Keep the proposal professional, clear, client-focused, and ready to share.
Do not invent facts, pricing, timelines, guarantees, or commitments that were not provided by the user.
`,

  outputType: 'markdown',
};

export default proposalDocumentGenerator;