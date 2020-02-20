import React, { useEffect } from "react";
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchOrganizationInfo, fetchOrganizationSubsInfo, selectItem, selectSubs } from '../../ducks/fetchOrganizationInfo';
import history from '../../redux/history';
import TopNavigation from "./Components/TopNavigation";
import Agents from "./Components/Agents";
import TodoList, { getTodo } from "./Components/TodoList";
import Info from "./Components/Info";
import SubOrganizations from "./Components/SubOrganizations";

function Organization(props) {
  const id = history.location.state ? history.location.state.id : history.location.pathname.split('/')[2];
  const canManage = history.location.pathname !== `/organization/${id}`;

  useEffect(() => {
    props.fetchOrganizationInfo({ id });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const { organization, subs } = props;
  const todos = getTodo(organization);
  let subsidiaries = _.get(organization, 'subsidiaries', []);

  useEffect(() => {
    subsidiaries && subsidiaries.length && props.fetchOrganizationSubsInfo({ id });
  }, [id, subsidiaries]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <TopNavigation organization={organization} canManage={canManage} todos={todos}/>
      <Info organization={organization} canManage={canManage}/>
      {subs && subs.length > 0 && <SubOrganizations organization={organization} subs={subs} canManage={canManage} />}
      {canManage && <Agents organization={organization}/>}
      {canManage && <TodoList organization={organization}/>}
    </div>
  )
}

Organization.defaultProps = {
  organization: {
    subsidiaries: []
  },
  subs: []
};

const mapStateToProps = state => {
  return {
    organization: selectItem(state),
    subs: selectSubs(state)
  }
};

const mapDispatchToProps = {
  fetchOrganizationInfo,
  fetchOrganizationSubsInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Organization);