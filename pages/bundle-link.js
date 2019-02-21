import {
  Banner,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Layout,
  Page,
  PageActions,
  TextField,
  Toast
} from "@shopify/polaris";
import store from "store-js";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// const UPDATE_INVENTORY = gql`
//   mutation productVariantUpdate($input: InventoryAdjustQuantityPayload!) {
//     productVariantUpdate(input: $input) {
//       product {
//         title
//       }
//       productVariant {
//         id
//         price
//       }
//     }
//   }
// `;

class BundleLink extends React.Component {
  state = {};
  render() {
    return (
      <Page>
        <Layout>
          <h1>Bundle Link</h1>
        </Layout>
      </Page>
    );
  }
}

export default BundleLink;
