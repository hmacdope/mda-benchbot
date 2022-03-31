
const { Context } = require('probot');

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.on("issues.opened", async (context) => {const issueComment = context.issue({
    body: "Thanks for opening this issue",
    })
    return context.octokit,issues.createComment(issueComment);
  });
  app.onAny(async (context) => {
    context.log.info({event: context.name, action: context.payload.action});
  });
  app.onError(async (error) => {
    context.log.error(error);
  });
};
