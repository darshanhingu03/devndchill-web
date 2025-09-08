import IndividualProfile from "../page";

interface PageProps {
  params: {
    profileId: string;
  };
}

export default function IndividualProfilePage({ params }: PageProps) {
  return <IndividualProfile />;
}
