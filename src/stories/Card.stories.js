import List from "../component/list/List";

export default {
    title: 'List',
    component: List,
}

const Template = (args) => <List {...args} />;

export const ListComp = Template.bind({});
ListComp.args = {
    rows: [],
    current: "EUR",
    handleClick: () => {console.log("Clicked !! Inside storybook Completion task")},
};


{/* Add the below code to rows section to add data in story board and you can also change the currency */}

// {
//     "&id": "SE|20221104|179|9:1:NEWO",
//     "timestamps": {
//       "orderReceived": "2022-11-04T15:29:00Z",
//       "orderStatusUpdated": "2022-11-04T15:29:00Z",
//       "orderSubmitted": "2022-11-04T15:29:00Z"
//     }
//   }