import { useState } from "react";
import styles from "../../../styles/StatusTracking.module.css";

export default function StatusTracking() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    {
      title: "Your e-commerce store is ready!",
      content: "Congratulations! Your e-commerce store is now live.",
      icon: "/tick.png",
      link: "#",
    },
    {
      title: "Add your first product",
      content: "Start adding products to your online store now!",
      button: "Add Product",
      additionalText: "or import from",
      icons: ["/shopify.png", "/woocommerce.png", "/g-pink.png"],
    },
    { title: "Set up payments", content: "" },
  ];

  return (
    <div className={styles["track-order-container"]}>
      <ul className={styles.stepper}>
        {steps.map((step, index) => (
          <li
            key={index}
            className={`${styles.step} ${styles[`step-${index + 1}`]}`}
          >
            <div className={styles.circle}>
              {step.icon ? <img src={step.icon} alt="Step Icon" /> : index + 1}
            </div>
            
          </li>
        ))}
      </ul>
      <div  className="flex flex-row  flex-wrap mt-12">
     {steps.map((step, index) => ( 
          
            <div className="ml-12">
              <p>{step.title}</p>
              <div>{step.content}</div>
              {step.link && <a href={step.link}>Visit Store</a>}
              {step.button && <button>{step.button}</button>}
              {step.additionalText && (
                <div>
                  <span>{step.additionalText}</span>
                  {step.icons.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={icon}
                      alt={`Icon ${iconIndex + 1}`}
                    />
                  ))}
                </div>
              )}

      </div>))}
            </div>
    </div>
  );
}
