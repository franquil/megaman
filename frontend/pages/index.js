import { Layout, Page, FormLayout, Card, Thumbnail, Select, Button, Heading } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

const options = [
  {label: 'Today', value: 'today'},
  {label: 'Yesterday', value: 'yesterday'},
  {label: 'Last 7 days', value: 'lastWeek'},
];

const Index = () => (

  <Page>
    <TitleBar
      title="AppManager"
    />
    <Layout>
      <Layout.Section>
        <Card style="width:500px;">
          <Thumbnail
            source="/logo.png"
            alt="Megaman"
          /><br/>
          <p>增强店铺营运，用应用管家。</p>
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Card>
          <Heading>店铺信息</Heading>
          <br/>
        </Card>

        <FormLayout>
          <Select
            label="销售商品类别"
            options={[
              {label: '虚拟', value: 'virtual'},
              {label: '实体', value: 'goods'},
            ]}
            value="virtual"
            labelInline={true}
          />
          <Select
            label="厂家所在地"
            options={[
              {label: '欧洲', value: 'europe'},
              {label: '北美', value: 'america'},
              {label: '南美', value: 'sa'},
              {label: '非洲', value: 'africa'},
              {label: '亚洲', value: 'asian'},
              {label: '澳洲', value: 'aust'},
            ]}
            value="europe"
            labelInline={true}
          />
          <Select
            label="客户所在地"
            options={[
              {label: '欧洲', value: 'europe'},
              {label: '北美', value: 'america'},
              {label: '南美', value: 'sa'},
              {label: '非洲', value: 'africa'},
              {label: '亚洲', value: 'asian'},
              {label: '澳洲', value: 'aust'},
            ]}
            value="asian"
            labelInline={true}
          />
          <Select
            label="语言"
            options={[
              {label: '英文', value: 'english'},
              {label: '中文', value: 'chinese'},
              {label: '法文', value: 'french'},
              {label: '西班牙文', value: 'spanish'},
              {label: '德文', value: 'germany'},
              {label: '日文', value: 'japanese'},
            ]}
            value="chinese"
            labelInline={true}
          />
          <Button submit primary={true}>提交</Button>
        </FormLayout>
      </Layout.Section>
    </Layout>
  </Page>
);

export default Index;