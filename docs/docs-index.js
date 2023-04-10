import React from 'react';
import Link from '@docusaurus/Link';
import HeroCard from '@site/src/components/HeroCard';
import Card from '@site/src/components/Card';
import ExploreCard from '../src/components/ExploreCard';
import Community from '../src/components/Community';

function DocsIndex() {
  return (
    <div className="p-8">
      <h1>
        Build Web5 apps that put you in control of your data and identity.
      </h1>
      <p className="mb-8">
        <Link href="/blog/what-is-web5">Web5</Link> brings decentralized
        identity and data storage to your applications. It lets developers focus
        on creating delightful user experiences, while returning ownership of
        data and identity to individuals.
      </p>
      <div>
        <HeroCard
          heroText="This is hero text"
          buttonUrl="/"
          buttonText="Start Tutorial"
          backgroundColor="cyan"
          bodyText="This card is something dope"
          primary={true}
        />
      </div>

      <h2>Learn More</h2>

      <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">
        <HeroCard
          heroText="This is hero text"
          buttonUrl="/"
          buttonText="Start Tutorial"
          backgroundColor="blue"
          imgSrc="/img/actors-web5-desktop.svg"
          bodyText="This is also something dope"
          themeColor="yellow"
        />
        <HeroCard
          heroText="This is hero text"
          buttonUrl="/"
          buttonText="Start Tutorial"
          backgroundColor="rebeccapurple"
          bodyText="This too is something dope"
          themeColor="purple"
        />
      </div>

      <h2>Technical Reference</h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 gap-4">
        <Card>
          <h3>SSI Service API</h3>
          <p style={{ color: 'rgb(180 180 180)' }} className="mb-4">
            Description about SSI Service goes here. This will give users a bit
            of insight on SSI Service.
          </p>

          <Link href="/docs/apis/ssi-service">
            View Documentation <span>&rarr;</span>
          </Link>
        </Card>
        <Card>
          <h3>SSI SDK</h3>
          <p style={{ color: 'rgb(180 180 180)' }} className="mb-4">
            Description about SSI SDK goes here. This will give users a bit of
            insight on SSI SDK.
          </p>

          <Link href="https://pkg.go.dev/github.com/TBD54566975/ssi-sdk">
            View Documentation <span>&rarr;</span>
          </Link>
        </Card>
        <Card>
          <h3>DWN SDK</h3>
          <p style={{ color: 'rgb(180 180 180)' }} className="mb-4">
            Description about DWN SDK goes here. This will give users a bit of
            insight on DWN SDK.
          </p>

          <Link href="https://tbd54566975.github.io/dwn-sdk-js/">
            View Documentation <span>&rarr;</span>
          </Link>
        </Card>
      </div>

      <h2>Explore</h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop-lg:grid-cols-4 gap-4">
        <ExploreCard
          text="Use Cases"
          icon="/img/actors-web5-desktop.svg"
          iconAltText="Use Cases Image"
          url="/docs/"
        />
        <ExploreCard
          text="Quick Start"
          icon="/img/actors-web5-desktop.svg"
          iconAltText="Quick Start Image"
          url="/docs/"
        />

        <ExploreCard
          text="Tutorials"
          icon="/img/actors-web5-desktop.svg"
          iconAltText="Use Cases Image"
          url="/docs/"
        />

        <ExploreCard
          text="Sample Apps"
          icon="/img/actors-web5-desktop.svg"
          iconAltText="Use Cases Image"
          url="https://github.com/TBD54566975/incubating-web5-labs"
        />
      </div>

      <Community />

      {/* <Card>
        <Link href="https://github.com/TBD54566975">
          <div className="flex items-center">
            <span>GitHub Repo</span>
            <span style={{ marginLeft: '12px' }}>
              <img
                src="/img/github-icon.svg"
                alt="github"
                width="20"
                height="20"
              />
            </span>
          </div>
        </Link>
      </Card> */}
    </div>
  );
}

export default DocsIndex;
