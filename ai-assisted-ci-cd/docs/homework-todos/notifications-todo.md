Now that you have a working workflow, you'll enhance it with failure notifications.

Task: Optimize your workflow to notify on failures.

Add Failure Notifications

Open Copilot Chat and ask:

Update the workflow file .github/workflows/playwright-tests.yml to add Microsoft Teams notifications with these exact requirements:

Notification behavior
Send a Teams message only when the workflow fails (if: failure()).
Include in the message:
Pull request title
PR author
Branch name
Link to the failed workflow run
Use a Teams webhook URL stored in GitHub Secrets as TEAMS_WEBHOOK_URL.

Implementation details
Use a final step at the end of the existing job so it runs even if earlier steps fail.
Keep the rest of the workflow unchanged.

Deliverable
Output the updated YAML (no explanations or comments).
Deliverables
Updated .github/workflows/playwright-tests.yml with Teams notification step