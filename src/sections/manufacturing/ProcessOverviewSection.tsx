import SectionHeader from '../../components/SectionHeader'

export default function ProcessOverviewSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-lumo text-center">
        <SectionHeader
          label="OUR PROCESS"
          heading="From Raw Fabric to Export-Ready Product"
          body="Our vertically integrated production process ensures complete quality control at every stage — from fabric sourcing through to final packaging."
          align="center"
        />
      </div>
    </section>
  )
}
