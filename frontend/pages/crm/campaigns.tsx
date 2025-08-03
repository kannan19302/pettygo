import { useEffect, useState } from 'react';

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/campaigns').then(r => r.json()).then(setCampaigns);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Campaigns</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Type</th><th>Status</th><th>Start</th><th>End</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign.id}>
              <td>{campaign.id}</td>
              <td>{campaign.name}</td>
              <td>{campaign.type}</td>
              <td>{campaign.status}</td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
