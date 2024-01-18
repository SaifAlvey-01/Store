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
            <div>
              <p className={styles["step-title"]}>{step.title}</p>
              <div className={styles["step-content"]}>{step.content}</div>
              {step.link && (
                <a className={styles.link} href={step.link}>
                  Visit Store
                </a>
              )}
              {step.button && (
                <button className={styles.btn}>{step.button}</button>
              )}
              {step.additionalText && (
                <div className={styles["additional-content"]}>
                  <span className={styles["mr-4"]}>{step.additionalText}</span>
                  {step.icons.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={icon}
                      alt={`Icon ${iconIndex + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
