import { Heading, Page, Button } from "@shopify/polaris";
import { useQuery, useMutation } from "@apollo/client";
import CREATE_SCRIPT_TAG from "gql/createScriptTag";
import GET_SCRIPT_TAGS from "gql/getScriptTags";

const Index = () => {
  const [createScriptTag] = useMutation(CREATE_SCRIPT_TAG);

  const { loading, error, data } = useQuery(GET_SCRIPT_TAGS);

  if (loading) {
    return <div />;
  }
  // console.log(data);

  const installScript = async () => {
    const res = await createScriptTag({
      variables: {
        input: {
          src: `${APP_URL}/script.js`,
          displayScope: "ONLINE_STORE",
        },
      },
    });
    console.log(res);
  };

  // install tag if script count is zero
  if (data.scriptTags.edges.length < 1) {
    installScript();
  }

  return (
    <Page>
      <Heading>Shopify app with Node and React 🎉</Heading>
      <Button onClick={() => installScript()}>Install script</Button>
    </Page>
  );
};

export default Index;
