'use client';

import { useEffect, useState } from 'react';
import { PiArrowUpRight, PiCheckCircle } from 'react-icons/pi';
import { copy } from '@/data/copy';
import { services, site } from '@/data/site';

export function Estimator() {
  const [bill, setBill] = useState(4000);
  const [tariff, setTariff] = useState(8);
  const size = Math.max(1, Math.round((bill / tariff / 30 / 4) * 10) / 10);

  return (
    <div className="estimator">
      <span className="eyebrow">{copy.forms.text01}</span>
      <h3>{copy.forms.text02}</h3>

      <label htmlFor="bill">
        {copy.forms.text03}
        <strong>₹{bill.toLocaleString('en-IN')}</strong>
      </label>
      <input
        id="bill"
        type="range"
        min="1000"
        max="20000"
        step="500"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="tariff">{copy.forms.text04}</label>
      <input
        id="tariff"
        type="number"
        min="1"
        max="30"
        value={tariff}
        onChange={(e) =>
          setTariff(Math.max(1, Math.min(30, Number(e.target.value))))
        }
      />

      <div className="estimate-result">
        <span>{copy.forms.text05}</span>
        <strong>
          {size} <small>{copy.forms.text06}</small>
        </strong>
      </div>

      <p className="fine">{copy.forms.text07}</p>
      <a className="text-link" href="/contact/">
        {copy.forms.text08}
        <PiArrowUpRight />
      </a>
    </div>
  );
}

export function EnquiryForm() {
  const [hydrated, setHydrated] = useState(false);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <form
      className="enquiry"
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const text = `Solar enquiry\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nLocation: ${d.get('location')}\nService: ${d.get('service')}\nDetails: ${d.get('details')}`;
        setMessage(text);
        setReady(true);
        if (site.whatsapp) {
          window.open(
            `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
            '_blank',
            'noopener,noreferrer'
          );
        }
      }}
    >
      <h2>{copy.forms.text09}</h2>
      <p>{copy.forms.text10}</p>

      <div className="form-grid">
        <label>
          {copy.forms.text11}
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={80}
            placeholder={copy.forms.text12}
          />
        </label>
        <label>
          {copy.forms.text13}
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[+0-9 ()-]{7,20}"
            placeholder={copy.forms.text14}
          />
        </label>
      </div>

      <label>
        {copy.forms.text15}
        <input
          name="location"
          required
          maxLength={150}
          placeholder={copy.forms.text16}
        />
      </label>

      <label>
        {copy.forms.text17}
        <select name="service">
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </label>

      <label>
        {copy.forms.text18}
        <textarea
          name="details"
          rows={4}
          maxLength={1500}
          placeholder={copy.forms.text19}
        />
      </label>

      <label className="consent">
        <input type="checkbox" required />{' '}
        <span>
          {copy.forms.text20}
          <a href="/privacy/">{copy.forms.text21}</a>
        </span>
      </label>

      <button className="button" type="submit" disabled={!hydrated}>
        Send enquiry on WhatsApp
        <PiArrowUpRight />
      </button>

      <p className="fine">
        Submitting opens WhatsApp with your pre-filled enquiry details so you
        can connect directly with our solar consultation team.
      </p>

      {ready && (
        <div className="form-result" role="status">
          <PiCheckCircle />
          <strong>Your enquiry is ready on WhatsApp</strong>
          <pre>{message}</pre>
        </div>
      )}
    </form>
  );
}
