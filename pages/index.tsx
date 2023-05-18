import React from "react";
import { useTranslation } from "next-i18next";

export default () => {
  const { t } = useTranslation("common");

  return <div>{t("hello-world")}</div>;
};
