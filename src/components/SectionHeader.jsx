const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--brand-rose-deep)]">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--brand-ink)] sm:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-[#4b3c3a]">{description}</p> : null}
  </div>
);

export default SectionHeader;
