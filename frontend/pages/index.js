import {  EmptyState, Layout, Page, TextStyle } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

const Index = () => (
  <Page>
    <TitleBar
      title="Sample App"
      primaryAction={{
        content: 'Select products',
      }}
    />
    <Layout>
      <TextStyle variation="positive">
        Sample app using React and Next.js
      </TextStyle>
    </Layout>
  </Page>
);

export default Index;