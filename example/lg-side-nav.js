import React from "react";
import ReactDOM from "react-dom";
import Nav from "../side-nav/Nav";
import NavGroup from "../side-nav/NavGroup";
import NavItem from "../side-nav/NavItem";
import Link from "../side-nav/Link";
import ExpandAllButton from "../side-nav/ExpandAllButton";

import Cookies from "js-cookie";

import "./index.scss";

const ALL_GROUP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Cookies.getJSON("state") || props;
  }

  render() {
    const {
      openedGroup,
      selectedGroup,
      selectedNavItem,
      expandAll
    } = this.state;
    return (
      <React.Fragment>
        <Nav
          className="customized-nav-container"
          allGroups={ALL_GROUP}
          openedGroup={openedGroup}
          selectedGroup={selectedGroup}
          selectedNavItem={selectedNavItem}
          expandAll={expandAll}
        >
          <ExpandAllButton />
          <NavItem path="/stockdata">
            <Link href="/stockdata" target="_blank">
              量化投资概述
            </Link>
          </NavItem>
          <NavGroup title="波段分析">
            <NavItem path="/stockdata/market-analysis-shanghai">
              <Link href="/stockdata/market-analysis-shanghai" target="_blank">
                上证指数波段分析
              </Link>
            </NavItem>
            <NavItem path="/stockdata/market-analysis-chuangye">
              <Link href="/stockdata/market-analysis-chuangye" target="_blank">
                创业板波段分析
              </Link>
            </NavItem>
            <NavItem path="/stockdata/market-analysis-average-price">
              <Link
                href="/stockdata/market-analysis-average-price"
                target="_blank"
              >
                A股平均股价
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="行情分析">
            <NavItem path="/stockdata/market-activity">
              <Link href="/stockdata/market-activity" target="_blank">
                赚钱效应分析
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="A股市盈率">
            <NavItem path="/stockdata/market_pe">
              <Link href="/stockdata/market_pe" target="_blank">
                A股整体市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/shanghaiPE">
              <Link href="/stockdata/shanghaiPE" target="_blank">
                上证A股市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/shenzhenPE">
              <Link href="/stockdata/shenzhenPE" target="_blank">
                深圳A股市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/zxbPE">
              <Link href="/stockdata/zxbPE" target="_blank">
                中小板市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/cybPE">
              <Link href="/stockdata/cybPE" target="_blank">
                创业板市盈率
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="A股指数市盈率">
            <NavItem path="/stockdata/sz50-ttm-lyr">
              <Link href="/stockdata/sz50-ttm-lyr" target="_blank">
                上证50市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/hs300-ttm-lyr">
              <Link href="/stockdata/hs300-ttm-lyr" target="_blank">
                沪深300市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/zzlt-ttm-lyr">
              <Link href="/stockdata/zzlt-ttm-lyr" target="_blank">
                中证流通市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/zz500-ttm-lyr">
              <Link href="/stockdata/zz500-ttm-lyr" target="_blank">
                中证500市盈率
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="港股市盈率">
            <NavItem path="/stockdata/market/hsi">
              <Link href="/stockdata/market/hsi" target="_blank">
                恒生指数市盈率
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="美股市盈率">
            <NavItem path="/stockdata/market/nasdaq">
              <Link href="/stockdata/market/nasdaq" target="_blank">
                纳斯达克市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/market/dow">
              <Link href="/stockdata/market/dow" target="_blank">
                道琼斯市盈率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/market/sandp">
              <Link href="/stockdata/market/sandp" target="_blank">
                普标500市盈率
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="A股市净率">
            <NavItem path="/stockdata/market_pb">
              <Link href="/stockdata/market_pb" target="_blank">
                A股整体市净率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/shanghaiPB">
              <Link href="/stockdata/shanghaiPB" target="_blank">
                上证A股市净率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/shenzhenPB">
              <Link href="/stockdata/shenzhenPB" target="_blank">
                深圳A股市净率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/zxbPB">
              <Link href="/stockdata/zxbPB" target="_blank">
                中小板市净率
              </Link>
            </NavItem>
            <NavItem path="/stockdata/cybPB">
              <Link href="/stockdata/cybPB" target="_blank">
                创业板市净率
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="基础面数据">
            <NavItem path="/stockdata/guxilv">
              <Link href="/stockdata/guxilv" target="_blank">
                A股股息率统计
              </Link>
            </NavItem>
            <NavItem path="/stockdata/companynum">
              <Link href="/stockdata/companynum" target="_blank">
                A股上市公司家数
              </Link>
            </NavItem>
            <NavItem path="/stockdata/shenzhenguben">
              <Link href="/stockdata/shenzhenguben" target="_blank">
                深圳A股总股本
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="宏观数据">
            <NavItem path="/stockdata/pmi">
              <Link href="/stockdata/pmi" target="_blank">
                PMI走势
              </Link>
            </NavItem>
            <NavItem path="/stockdata/m1m2">
              <Link href="/stockdata/m1m2" target="_blank">
                M1M2走势图
              </Link>
            </NavItem>
            <NavItem path="/stockdata/broadmoney">
              <Link href="/stockdata/broadmoney" target="_blank">
                M1-M2剪刀差
              </Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="情绪指标">
            <NavItem path="/stockdata/averageposition">
              <Link href="/stockdata/averageposition" target="_blank">
                仓位数据
              </Link>
            </NavItem>
            <NavItem path="/stockdata/a_shares_new_account">
              <Link href="/stockdata/a_shares_new_account" target="_blank">
                新增开户数
              </Link>
            </NavItem>
          </NavGroup>
        </Nav>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  openedGroup: ALL_GROUP,
  expandAll: true
};

ReactDOM.render(<App />, document.querySelector(".data-center-menu"));
