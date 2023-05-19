import { useTranslation } from "next-i18next"
export const Hoge = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <p>HOGEEE</p>
      <div>{t("hello-world")}</div>
      <p>{i18n.language ?? 'undefined'}</p>
    </>
  )
}
