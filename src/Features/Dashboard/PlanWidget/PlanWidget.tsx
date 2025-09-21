import { useEffect, useState } from "react";
import styles from "./PlanWidget.module.scss";
import { Tabs } from "./Components/Tabs/Tabs";
import { PlanTable } from "./Components/PlanTable/PlanTable";
import { PlanAggregate } from "./Components/PlanAggregate/PlanAggregate";
import { usePlanData } from "./helpers/useLanguageChange.ts";
import React from "react";

export const PlanWidget = ({ backgroundColor }: { backgroundColor: string }) => {
  const planData = usePlanData(); 
  const [activeTab, setActiveTab] = useState<string>("");
  const [transitioning, setTransitioning] = useState(false);

  // 🔹 Sync activeTab with new planData
  useEffect(() => {
    if (planData.length > 0) {
      // Check if current tab exists in new data
      const tabExists = planData.some((section) => section.title === activeTab);

      if (!tabExists) {
        // If current tab is invalid, fallback to first tab
        setActiveTab(planData[0].title);
      }
    }
  }, [planData, activeTab]);

  const getActionPlanData = () => {
    return planData
      .filter((section) => section.type !== "aggregated") 
      .flatMap((section) =>
        section.data.map((item) => ({
          ...item,
          group: section.title, 
        }))
      );
  };

  const enrichedPlanMockData = planData.map((section) =>
    section.type === "aggregated"
      ? { ...section, data: getActionPlanData() }
      : section
  );

  const activeSection = enrichedPlanMockData.find(
    (section) => section.title === activeTab
  );

  const handleTabChange = (newTab: string) => {
    setTransitioning(true);
    setActiveTab(newTab);
  };

  return (
    <div
      className={`${styles["PlanWidget-wrapper"]} ${
        backgroundColor === "blue" && styles["PlanWidget-wrapper-blue"]
      }`}
    >
      <Tabs
        sections={enrichedPlanMockData}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        backgroundColor={backgroundColor}
      />
      <div className={styles["PlanWidget-content"]}>
        {activeTab === "Action Plan" && activeSection ? (
          <PlanAggregate
            section={activeSection}
            setActiveTab={setActiveTab}
            backgroundColor={backgroundColor}
          />
        ) : (
          activeSection && (
            <PlanTable
              section={activeSection}
              setActiveTab={setActiveTab}
              transitioning={transitioning}
              setTransitioning={setTransitioning}
            />
          )
        )}
      </div>
    </div>
  );
};
