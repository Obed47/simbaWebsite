'use client'

import { type FormEvent, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { contact } from '@/content/fr'
import { siteConfig } from '@/config/site'

const EMAIL_OR_PHONE_PATTERN = /^(?:\+?\d[\d\s-]{6,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/

interface FormState {
  profile: string
  name: string
  contactInfo: string
  message: string
}

type FieldErrors = Partial<Record<'name' | 'contactInfo' | 'message', string>>
type Status = 'idle' | 'sending' | 'success' | 'error' | 'not-configured'

const initialForm: FormState = {
  profile: contact.form.profiles[0].value,
  name: '',
  contactInfo: '',
  message: '',
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): FieldErrors => {
    const next: FieldErrors = {}
    if (form.name.trim().length < 2) next.name = contact.form.errors.name
    if (!EMAIL_OR_PHONE_PATTERN.test(form.contactInfo.trim())) next.contactInfo = contact.form.errors.contact
    if (form.message.trim().length < 10) next.message = contact.form.errors.message
    return next
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!siteConfig.contactEndpoint) {
      // Be honest: the form is wired up and validated, but has nowhere to send
      // data yet. Never show a fabricated success message in this case.
      setStatus('not-configured')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error('server')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id={contact.id} aria-labelledby="contact-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} lead={contact.lead} />

            <ul className="mt-8 space-y-3">
              {contact.paths.map((path) => (
                <li key={path.title} className="rounded-xl border border-line bg-white p-4 shadow-soft">
                  <p className="font-semibold text-navy-900">{path.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{path.text}</p>
                </li>
              ))}
            </ul>

            {!siteConfig.contact.email && !siteConfig.contact.phone ? (
              <p className="mt-6 text-sm text-muted">{contact.directContact}</p>
            ) : null}
          </div>

          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-panel border border-line bg-white p-6 shadow-soft sm:p-8"
            >
              <fieldset>
                <legend className="text-sm font-medium text-navy-900">{contact.form.profileLabel}</legend>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {contact.form.profiles.map((profile) => (
                    <label
                      key={profile.value}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-3 text-sm transition-colors ${
                        form.profile === profile.value
                          ? 'border-accent bg-accent-soft text-accent-text'
                          : 'border-line text-navy-900 hover:border-line-strong'
                      }`}
                    >
                      <input
                        type="radio"
                        name="profile"
                        value={profile.value}
                        checked={form.profile === profile.value}
                        onChange={() => setForm((f) => ({ ...f, profile: profile.value }))}
                        className="h-4 w-4 accent-[var(--color-accent)]"
                      />
                      {profile.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5">
                <label htmlFor="contact-name" className="text-sm font-medium text-navy-900">
                  {contact.form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => setForm((f) => ({ ...f, name: event.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className="mt-1.5 w-full rounded-xl border border-line px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-800"
                />
                {errors.name ? (
                  <p id="contact-name-error" className="mt-1.5 text-sm text-red-700">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-info" className="text-sm font-medium text-navy-900">
                  {contact.form.contactLabel}
                </label>
                <input
                  id="contact-info"
                  type="text"
                  autoComplete="tel"
                  value={form.contactInfo}
                  onChange={(event) => setForm((f) => ({ ...f, contactInfo: event.target.value }))}
                  aria-invalid={Boolean(errors.contactInfo)}
                  aria-describedby={errors.contactInfo ? 'contact-info-error' : 'contact-info-help'}
                  className="mt-1.5 w-full rounded-xl border border-line px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-800"
                />
                {errors.contactInfo ? (
                  <p id="contact-info-error" className="mt-1.5 text-sm text-red-700">
                    {errors.contactInfo}
                  </p>
                ) : (
                  <p id="contact-info-help" className="mt-1.5 text-sm text-muted">
                    {contact.form.contactHelp}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="text-sm font-medium text-navy-900">
                  {contact.form.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(event) => setForm((f) => ({ ...f, message: event.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className="mt-1.5 w-full resize-y rounded-xl border border-line px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-800"
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1.5 text-sm text-red-700">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? contact.form.sending : contact.form.submit}
              </button>

              <div aria-live="polite" className="mt-4">
                {status === 'success' ? (
                  <p className="flex items-center gap-2 text-sm font-medium text-accent-text">
                    <Icon name="check" className="h-4 w-4" />
                    {contact.form.success}
                  </p>
                ) : null}
                {status === 'not-configured' ? (
                  <p className="text-sm text-sun-ink">{contact.form.notConfigured}</p>
                ) : null}
                {status === 'error' ? <p className="text-sm text-red-700">{contact.form.errors.server}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
