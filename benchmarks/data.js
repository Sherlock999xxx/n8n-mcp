window.BENCHMARK_DATA = {
  "lastUpdate": 1771450152568,
  "repoUrl": "https://github.com/Sherlock999xxx/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f695be48205831f4dcccf73c3d60cced196b77c",
          "message": "fix: disable MCP Apps that don't render in Claude.ai (#586)\n\nDisable 3 MCP Apps (workflow-list, execution-history, health-dashboard)\nthat show as collapsed accordions and remove n8n_deploy_template tool\nmapping that renders blank content. The server sets _meta correctly on\nthe wire but the Claude.ai host ignores it for these tools. Keep the 2\nworking apps (operation-result, validation-summary) active.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-10T02:26:40+01:00",
          "tree_id": "e0e55dded1fe24727a3288b6d22bbe9f66c21a20",
          "url": "https://github.com/Sherlock999xxx/n8n-mcp/commit/6f695be48205831f4dcccf73c3d60cced196b77c"
        },
        "date": 1771450152009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}