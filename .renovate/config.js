module.exports = {
  token: process.env.GITHUB_TOKEN,
  platform: 'github',
  onboardingConfig: {
    extends: ['config:base'],
  },
  repositories: ['at-wat/renovate-repro-major-not-updated'],
};
