import React from 'react';
import Link from 'next/link';

const navItems = [
	{ label: 'Dashboard', href: '/hr/dashboard', icon: '🏠' },
	{ label: 'Employees', href: '/hr/employees', icon: '👥' },
	{ label: 'Attendance', href: '/hr/attendance', icon: '🕒' },
	{ label: 'Leaves', href: '/hr/leaves', icon: '🌴' },
	{ label: 'Shifts', href: '/hr/shifts', icon: '🗓️' },
	{ label: 'Payroll', href: '/hr/payroll', icon: '💰' },
	{ label: 'Performance', href: '/hr/performance', icon: '📈' },
	{ label: 'Documents', href: '/hr/documents', icon: '📄' },
	{ label: 'Self-Service', href: '/hr/self-service', icon: '🙋' },
	{ label: 'Reports', href: '/hr/reports', icon: '📊' },
];

export default function Sidebar({ active }: { active?: string }) {
	return (
		<aside className="erp-hr-sidebar">
			<div className="erp-hr-sidebar-header">HR</div>
			<nav>
				{navItems.map(item => (
					<Link key={item.href} href={item.href} legacyBehavior>
						<a className={active === item.href ? 'active' : ''}>
							<span className="icon">{item.icon}</span>
							{item.label}
						</a>
					</Link>
				))}
			</nav>
			<style jsx>{`
				.erp-hr-sidebar {
					width: 220px;
					background: var(--erp-sidebar-bg, #f8fafc);
					border-right: 1.5px solid #e5e7eb;
					min-height: 100vh;
					padding: 1.5rem 0.5rem 1.5rem 1.5rem;
					display: flex;
					flex-direction: column;
				}
				.erp-hr-sidebar-header {
					font-size: 1.4rem;
					font-weight: 700;
					margin-bottom: 2rem;
				}
				nav a {
					display: flex;
					align-items: center;
					gap: 0.8rem;
					padding: 0.7rem 1rem;
					border-radius: 8px;
					color: #222;
					text-decoration: none;
					font-weight: 500;
					margin-bottom: 0.2rem;
					transition: background 0.15s;
				}
				nav a.active,
				nav a:hover {
					background: #e0e7ef;
					color: #0070f3;
				}
				.icon {
					font-size: 1.2rem;
				}
				@media (max-width: 900px) {
					.erp-hr-sidebar {
						width: 100%;
						min-height: unset;
						flex-direction: row;
						overflow-x: auto;
						border-right: none;
						border-bottom: 1.5px solid #e5e7eb;
						padding: 0.5rem;
					}
					nav {
						display: flex;
						flex-direction: row;
						gap: 0.5rem;
					}
				}
			`}</style>
		</aside>
	);
}
