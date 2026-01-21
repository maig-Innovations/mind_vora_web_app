import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function Legal() {
  return (
    <Layout 
      seoTitle="Terms of Use" 
      seoDescription="Mindvora Solutions provides end-to-end software development, AI solutions, and business automation. Read our terms and policies..."
    >
      <PageHeader title="Privacy Policy" description="Last updated: October 2023" />
      <section className="section-padding">
        <div className="container-width max-w-3xl prose prose-slate">
          <h3>1. Introduction</h3>
          <p>
            Mindvora Solutions respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>
          <h3>2. Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Technical Data, and Usage Data.
          </p>
          <h3>3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.
          </p>
        </div>
      </section>
    </Layout>
  );
}
