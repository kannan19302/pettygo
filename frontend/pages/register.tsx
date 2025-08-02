import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/hr-auth', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setTimeout(() => router.push('/login'), 1500);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (e) {
      setError('Server error');
    }
  }

  return (
    <>
      <Head><title>Register | PettyGo ERP</title></Head>
      <div className="erp-login-page">
        <form className="erp-login-form" onSubmit={handleRegister}>
          <img src="/logo.svg" alt="PettyGo ERP" className="erp-login-icon" />
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin (request approval)</option>
          </select>
          {error && <div className="erp-login-error">{error}</div>}
          <button type="submit">Register</button>
          {success && <div style={{ color: 'green', marginTop: 12 }}>Registration successful! Redirecting...</div>}
        </form>
      </div>
      <style jsx>{`
        .erp-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
        }
        .erp-login-form {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 320px;
        }
        .erp-login-icon {
          width: 56px;
          height: 56px;
          margin-bottom: 1.2rem;
        }
        .erp-login-form h2 {
          margin-bottom: 1.5rem;
        }
        .erp-login-form input, .erp-login-form select {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          border: 1.5px solid #e5e7eb;
          font-size: 1.08rem;
        }
        .erp-login-form button {
          background: linear-gradient(90deg, #0070f3 0%, #5ea6fa 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.8rem 2.5rem;
          font-size: 1.08rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,112,243,0.10);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .erp-login-form button:hover {
          background: linear-gradient(90deg, #005bb5 0%, #0070f3 100%);
        }
        .erp-login-error {
          color: #f43f5e;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}
