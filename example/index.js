import React from "react";
import ReactDOM from "react-dom";
import Nav from "../side-nav/Nav";
import NavGroup from "../side-nav/NavGroup";
import NavItem from "../side-nav/NavItem";
import Link from "../side-nav/Link";
import ButtonLink from "../side-nav/ButtonLink";

import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav className="customized-nav-container">
          <NavItem path="/stockdata">
            <ButtonLink href="https://legulegu.com/stockdata" target="_blank">展开全部</ButtonLink>
          </NavItem>
          <NavItem path="/stockdata">
            <Link href="https://legulegu.com/stockdata" target="_blank">量化投资概述</Link>
          </NavItem>
          <NavGroup title="波段分析">
            <NavItem path="/stockdata/market-analysis-shanghai">
              <Link href="https://legulegu.com/stockdata/market-analysis-shanghai" target="_blank">上证指数波段分析</Link>
            </NavItem>
            <NavItem path="/stockdata/market-analysis-chuangye">
              <Link href="https://legulegu.com/stockdata/market-analysis-chuangye" target="_blank">创业板波段分析</Link>
            </NavItem>
            <NavItem path="/stockdata/market-analysis-average-price">
              <Link href="https://legulegu.com/stockdata/market-analysis-average-price" target="_blank">A股平均股价</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="量化分析">
            <NavItem path="/stockdata/market-activity">
              <Link href="https://legulegu.com/stockdata/market-activity" target="_blank">赚钱效应分析</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="A股市盈率">
            <NavItem path="/stockdata/market_pe">
              <Link href="https://legulegu.com/stockdata/market_pe" target="_blank">A股整体市盈率</Link>
            </NavItem>
            <NavItem path="/stockdata/shanghaiPE">
              <Link href="https://legulegu.com/stockdata/shanghaiPE" target="_blank">上证A股市盈率</Link>
            </NavItem>
            <NavItem path="/stockdata/shenzhenPE">
              <Link href="https://legulegu.com/stockdata/shenzhenPE" target="_blank">深圳A股市盈率</Link>
            </NavItem>
            <NavItem path="/stockdata/zxbPE">
              <Link href="https://legulegu.com/stockdata/zxbPE" target="_blank">中小板市盈率</Link>
            </NavItem>
            <NavItem path="/stockdata/cybPE">
              <Link href="https://legulegu.com/stockdata/cybPE" target="_blank">创业板市盈率</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="港股市盈率">
            <NavItem path="/stockdata/market/hsi">
              <Link href="https://legulegu.com/stockdata/market/hsi" target="_blank">恒生指数市盈率</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="美股市盈率">
            <NavItem path="/stockdata/market/nasdaq">
              <Link href="https://legulegu.com/stockdata/market/nasdaq" target="_blank">纳斯达克市盈率</Link>
            </NavItem>
            <NavItem path="/stockdata/market/dow">
              <Link href="https://legulegu.com/stockdata/market/dow" target="_blank">道琼斯市盈率</Link>
            </NavItem>
            <NavItem path="/stockdata/market/sandp">
              <Link href="https://legulegu.com/stockdata/market/sandp" target="_blank">普标500市盈率</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="A股市净率">
            <NavItem path="/stockdata/market_pb">
              <Link href="https://legulegu.com/stockdata/market_pb" target="_blank">A股整体市净率</Link>
            </NavItem>
            <NavItem path="/stockdata/shanghaiPB">
              <Link href="https://legulegu.com/stockdata/shanghaiPB" target="_blank">上证A股市净率</Link>
            </NavItem>
            <NavItem path="/stockdata/shenzhenPE">
              <Link href="https://legulegu.com/stockdata/shenzhenPB" target="_blank">深圳A股市净率</Link>
            </NavItem>
            <NavItem path="/stockdata/zxbPE">
              <Link href="https://legulegu.com/stockdata/zxbPB" target="_blank">中小板市净率</Link>
            </NavItem>
            <NavItem path="/stockdata/cybPE">
              <Link href="https://legulegu.com/stockdata/cybPB" target="_blank">创业板市净率</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="基础面数据">
            <NavItem path="/stockdata/guxilv">
              <Link href="https://legulegu.com/stockdata/guxilv" target="_blank">A股股息率统计</Link>
            </NavItem>
            <NavItem path="/stockdata/companynum">
              <Link href="https://legulegu.com/stockdata/shanghaiPB" target="_blank">A股上市公司家数</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="宏观数据">
            <NavItem path="/stockdata/pmi">
              <Link href="https://legulegu.com/stockdata/pmi" target="_blank">PMI走势</Link>
            </NavItem>
            <NavItem path="/stockdata/m1m2">
              <Link href="https://legulegu.com/stockdata/m1m2" target="_blank">M1M2走势图</Link>
            </NavItem>
            <NavItem path="/stockdata/broadmoney">
              <Link href="https://legulegu.com/stockdata/broadmoney" target="_blank">M1-M2剪刀差</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="情绪指标">
            <NavItem path="/stockdata/averageposition">
              <Link href="https://legulegu.com/stockdata/averageposition" target="_blank">仓位数据</Link>
            </NavItem>
            <NavItem path="/stockdata/m1m2">
              <Link href="https://legulegu.com/stockdata/m1m2" target="_blank">M1M2走势图</Link>
            </NavItem>
            <NavItem path="/stockdata/broadmoney">
              <Link href="https://legulegu.com/stockdata/a_shares_new_account" target="_blank">新增开户数</Link>
            </NavItem>
          </NavGroup>
        </Nav>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
