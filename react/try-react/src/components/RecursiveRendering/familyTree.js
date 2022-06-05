import React, { Component } from "react";
import styled from "styled-components";
import Member from "./member";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => `${props.level * 30}px`};
`;

const StyledWrapperTop = styled.div`
  color: orange;
`;

export default class FamilyTree extends Component {
  hasChildren2() {
    console.log("member", this.props.members);
    //   return this.props.member.children && this.props.member.children.length;
  }
  hasChildren(member) {
    return member.children && member.children.length;
  }
  componentDidMount() {
    this.hasChildren2();
  }
  render() {
    const level = this.props.level || 0;
    return (
      <StyledWrapper level={level}>
        {this.props.members.map((member, i) => {
          let comp = <Member {...member} />;

          return (
            <div key={`level-${level}-${i}`}>
              {comp}
              {this.hasChildren(member) && (
                <FamilyTree
                  members={member.children}
                  current={this.props.member}
                  level={level + 1}
                />
              )}
            </div>
          );
        })}
      </StyledWrapper>
    );
  }
}
