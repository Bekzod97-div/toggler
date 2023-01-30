const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment-period-radio"]');
const elPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
    elPaymentPeriodRadio.addEventListener('change', function() {
        const period = elPaymentPeriodRadio.value;

        if(period === 'annual') {
            elPricingPlanValue.forEach(function (elPrice) {
                elPrice.textContent = elPrice.closest('.price-number').dataset.paymentAnnual;
            });
        } else {
            elPricingPlanValue.forEach(function (elPrice) {
                elPrice.textContent = elPrice.closest('.price-number').dataset.paymentMonthly;
                });
            }
        });
        });