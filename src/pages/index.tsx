import React from "react";
import { useTranslation } from "next-i18next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Hoge } from "../components/Hoge";

type Props = {

}

export default (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { i18n, t } = useTranslation('common');

  return (
    <>
      <div>{t("hello-world")}</div>
      <p>{i18n.language ?? 'undefined'}</p>
      <Hoge />
    </>
  )
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ja', [
      'common',
    ])),
  },
})
