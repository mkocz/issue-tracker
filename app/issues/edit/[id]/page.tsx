// "use client";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueFormWrapper from "../../_components/IssueFormWrapper";

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async (props: Props) => {
  const params = await props.params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return <IssueFormWrapper issue={issue} />;
};

export default EditIssuePage;
