interface BrandStripeProps {
  className?: string
}

const BrandStripe = ({ className = '' }: BrandStripeProps) => {
  return (
    <div aria-hidden="true" className={className}>
      <div className="h-[5px] bg-brand-cyan" />
      {/* tejido.svg is 436.172 × 53.3 units: keep that ratio if the band height changes. */}
      <div className="h-4 bg-white bg-[url('/brand/tejido.svg')] bg-[length:131px_16px] bg-repeat-x" />
      <div className="h-[5px] bg-brand-pink" />
    </div>
  )
}

export default BrandStripe
