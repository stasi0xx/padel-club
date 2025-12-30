import { getPricingPlans } from "@/app/actions/pricing-actions";
import { PricingList } from "./PricingList";

// To jest Server Component
export async function Pricing() {
    const plans = await getPricingPlans();

    return <PricingList plans={plans} />;
}