import React, { useState, useContext, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Routes, Route, Navigate } from 'react-router-dom'
import MyRecordsPage from './pages/MyRecordsPage/MyRecordsPage'
import MyHomePage from './pages/MyHomePage/MyHomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import MyDashboard from "./pages/MyDashboard/MyDashboard";
import NavBar from './components/NavBar/NavBar'
import LoginPage from './components/LoginPage/LoginPage'
import AuthContext, { AuthProvider } from "./context/AuthContext"
import ProtectedPage from "./utilities/utils_ProtectedPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfileSettingsAccount from "./components/ProfileSettingsAccount";
import YourCollection from "./components/YourCollection";
import Dashboard from "./components/Dashboard";
import AlbumDetails from "./components/AlbumDetails";
import Collection from "./components/Collection";
import Marketplace from "./components/Marketplace";
import RegistrationSignInBasic from "./components/RegistrationSignInBasic";
import Landing from "./components/Landing";
import RegistrationSignInBasicDetails from "./components/RegistrationSignInBasicDetails";
import TopImage from './img/-navigation--web---top-bar-w-links--onlight-copy@1x.png'
import AddRecord from "./components/AddRecord/AddRecord";

export default function App() {
	return (
		<main className="App">
			<AuthProvider>
			<NavBar />
			<Routes>
				<Route path="/protected" element={<ProtectedPage />} />
				<Route path="/myrecords" element={<MyRecordsPage />} />
				<Route path="/records" element={<SearchPage />} />
				{/* <Route path="" element={<Landing {...landingData} />} /> */}
				<Route path="" element={<MyHomePage />} />
				<Route path="landing/" element={<Landing />} />
				<Route path="/dashboard" element={<MyDashboard />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
                <Route path="/add" element={<AddRecord />} />
			</Routes>
		</AuthProvider>
		</main>
	)
}

const buttonsLabelFilledActiveOnLight1Data = {
    children: "Add Album",
};

const buttonsIconOutlineRestingOnLight1Data = {
    children: "",
};

const navigationWebTopBarOnLight1Data = {
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight1Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight1Data,
};

const navigationWebSidebarItemRestingOnLi1Data = {
    icon: "",
    link: "Dashboard",
};

const navigationWebSidebarItemRestingOnLi2Data = {
    icon: "",
    link: "Your Collections",
    className: "navigation-web-sideb",
};

const navigationWebSidebarItemRestingOnLi3Data = {
    icon: "",
    link: "Favorites",
    className: "item-1",
};

const navigationWebSidebarItemRestingOnLi4Data = {
    icon: "",
    link: "Following",
    className: "item-2",
};

const navigationWebSidebarItemActiveOnLig1Data = {
    icon: "",
    link: "Account Details",
};

const navigationWebSidebarItemRestingOnLi5Data = {
    icon: "",
    link: "Security",
    className: "item-3",
};

const navigationWebSidebarItemRestingOnLi6Data = {
    icon: "",
    link: "Apps",
    className: "item-4",
};

const navigationWebSidebarItemRestingOnLi7Data = {
    icon: "",
    link: "Notifications",
    className: "item-5",
};

const navigationWebSidebarItemRestingOnLi8Data = {
    icon: "",
    link: "Help Center",
    className: "item-copy",
};

const navigationWebSidebarMenuOnLightData = {
    manageListings: "Manage listings",
    profileSettings: "Profile settings",
    navigationWebSidebarItemRestingOnLi1Props: navigationWebSidebarItemRestingOnLi1Data,
    navigationWebSidebarItemRestingOnLi2Props: navigationWebSidebarItemRestingOnLi2Data,
    navigationWebSidebarItemRestingOnLi3Props: navigationWebSidebarItemRestingOnLi3Data,
    navigationWebSidebarItemRestingOnLi4Props: navigationWebSidebarItemRestingOnLi4Data,
    navigationWebSidebarItemActiveOnLigProps: navigationWebSidebarItemActiveOnLig1Data,
    navigationWebSidebarItemRestingOnLi5Props: navigationWebSidebarItemRestingOnLi5Data,
    navigationWebSidebarItemRestingOnLi6Props: navigationWebSidebarItemRestingOnLi6Data,
    navigationWebSidebarItemRestingOnLi7Props: navigationWebSidebarItemRestingOnLi7Data,
    navigationWebSidebarItemRestingOnLi8Props: navigationWebSidebarItemRestingOnLi8Data,
};

const settingsFieldTextOnLight1Data = {
    subtitle: "Username",
    title: "@midawg343",
};

const settingsFieldTextOnLight2Data = {
    subtitle: "Full name",
    title: "Miles Lathan",
    className: "settings-field-text-1",
};

const settingsFieldTextOnLight3Data = {
    subtitle: "Account Type",
    title: "Enthusiast",
    className: "settings-field-text-2",
};

const settingsFieldTextOnLight4Data = {
    subtitle: "Email address",
    title: "midawg@gmail.com",
    className: "settings-field-text-3",
};

const settingsFieldTextOnLight5Data = {
    subtitle: "Phone number",
    title: "+995 590 558 124",
    className: "settings-field-text-4",
};

const settingsFieldTextOnLight6Data = {
    subtitle: "Address",
    title: "83222 Dicki View, South Pasqualeview, RI 79216-3100",
    className: "settings-field-text-5",
};

const buttonsLabelFilledActiveOnLight2Data = {
    children: "Update Settings",
    className: "buttons-label-filled-active-on-light",
};

const links1Data = {
    x2021AllRightsRe: "© 2021 All rights reserved",
};

const buttonsLabelIconTransparentRestingO1Data = {
    lable: "English",
    icon: "",
};

const navigationWebFooterMinimalOnLight1Data = {
    linksProps: links1Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO1Data,
};

const profileSettingsAccountData = {
    profileSettings: "Profile settings",
    accountInformation: "Account information",
    contactDetails: "Contact details",
    navigationWebTopBarOnLightProps: navigationWebTopBarOnLight1Data,
    navigationWebSidebarMenuOnLightProps: navigationWebSidebarMenuOnLightData,
    settingsFieldTextOnLight1Props: settingsFieldTextOnLight1Data,
    settingsFieldTextOnLight2Props: settingsFieldTextOnLight2Data,
    settingsFieldTextOnLight3Props: settingsFieldTextOnLight3Data,
    settingsFieldTextOnLight4Props: settingsFieldTextOnLight4Data,
    settingsFieldTextOnLight5Props: settingsFieldTextOnLight5Data,
    settingsFieldTextOnLight6Props: settingsFieldTextOnLight6Data,
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight2Data,
    navigationWebFooterMinimalOnLightProps: navigationWebFooterMinimalOnLight1Data,
};

const buttonsLabelFilledActiveOnLight3Data = {
    children: "Add Album",
};

const buttonsIconOutlineRestingOnLight2Data = {
    children: "",
};

const navigationWebTopBarOnLight2Data = {
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight3Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight2Data,
};

const navigationWebSidebarItemRestingOnLi9Data = {
    icon: "",
    link: "Dashboard",
};

const navigationWebSidebarItemActiveOnLig2Data = {
    icon: "",
    link: "/img/link@1x.png",
};

const navigationWebSidebarItemRestingOnLi10Data = {
    icon: "",
    link: "Favorites",
    className: "item-7",
};

const navigationWebSidebarItemRestingOnLi11Data = {
    icon: "",
    link: "Following",
    className: "item-8",
};

const navigationWebSidebarItemRestingOnLi12Data = {
    icon: "",
    link: "Account Details",
    className: "item-9",
};

const navigationWebSidebarItemRestingOnLi13Data = {
    icon: "",
    link: "Security",
    className: "item-10",
};

const navigationWebSidebarItemRestingOnLi14Data = {
    icon: "",
    link: "Apps",
    className: "item-11",
};

const navigationWebSidebarItemRestingOnLi15Data = {
    icon: "",
    link: "Notifications",
    className: "item-12",
};

const navigationWebSidebarItemRestingOnLi16Data = {
    icon: "",
    link: "Help Center",
    className: "item-copy-1",
};

const navigationWebSidebarMenuOnLight2Data = {
    manageListings: "Manage listings",
    profileSettings: "Profile settings",
    navigationWebSidebarItemRestingOnLi1Props: navigationWebSidebarItemRestingOnLi9Data,
    navigationWebSidebarItemActiveOnLig2Props: navigationWebSidebarItemActiveOnLig2Data,
    navigationWebSidebarItemRestingOnLi2Props: navigationWebSidebarItemRestingOnLi10Data,
    navigationWebSidebarItemRestingOnLi3Props: navigationWebSidebarItemRestingOnLi11Data,
    navigationWebSidebarItemRestingOnLi4Props: navigationWebSidebarItemRestingOnLi12Data,
    navigationWebSidebarItemRestingOnLi5Props: navigationWebSidebarItemRestingOnLi13Data,
    navigationWebSidebarItemRestingOnLi6Props: navigationWebSidebarItemRestingOnLi14Data,
    navigationWebSidebarItemRestingOnLi7Props: navigationWebSidebarItemRestingOnLi15Data,
    navigationWebSidebarItemRestingOnLi8Props: navigationWebSidebarItemRestingOnLi16Data,
};

const marketplaceItemV8OnLight1Data = {
    art: "/img/art@2x.png",
    title: "May Bring Back",
    amount: "10",
    details: "items",
};

const marketplaceItemV8OnLight2Data = {
    art: "/img/art-1@2x.png",
    title: "Farhad’s and Mike",
    amount: "28",
    details: "0.05 ETH",
    className: "marketplace-item-v1-on-light-copy-4",
};

const marketplaceItemV8OnLight3Data = {
    art: "/img/art-5@2x.png",
    title: "Auto Technology",
    amount: "132",
    details: "items",
    className: "marketplace-item-v1-on-light-copy",
};

const marketplaceItemV8OnLight4Data = {
    art: "/img/art-3@2x.png",
    title: "Walgreens Chief",
    amount: "56",
    details: "items",
    className: "marketplace-item-v1-on-light-copy-6",
};

const marketplaceItemV8OnLight5Data = {
    art: "/img/art-4@2x.png",
    title: "Front Desk",
    amount: "56",
    details: "items",
    className: "marketplace-item-v1-on-light-copy-3",
};

const marketplaceItemV8OnLight6Data = {
    art: "/img/art-2@2x.png",
    title: "Improving Culture",
    amount: "164",
    details: "items",
    className: "marketplace-item-v1-on-light-copy-5",
};

const next1Data = {
    children: "",
};

const next2Data = {
    children: "",
    className: "next-1",
};

const elementPaginationCenteredOnLightData = {
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    next1Props: next1Data,
    next2Props: next2Data,
};

const links2Data = {
    x2021AllRightsRe: "© 2021 All rights reserved",
};

const buttonsLabelIconTransparentRestingO2Data = {
    lable: "English",
    icon: "",
};

const navigationWebFooterMinimalOnLight2Data = {
    className: "navigation-web-foote-1",
    linksProps: links2Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO2Data,
};

const yourCollectionData = {
    yourCollections: "Your collections",
    navigationWebTopBarOnLightProps: navigationWebTopBarOnLight2Data,
    navigationWebSidebarMenuOnLight2Props: navigationWebSidebarMenuOnLight2Data,
    marketplaceItemV8OnLight1Props: marketplaceItemV8OnLight1Data,
    marketplaceItemV8OnLight2Props: marketplaceItemV8OnLight2Data,
    marketplaceItemV8OnLight3Props: marketplaceItemV8OnLight3Data,
    marketplaceItemV8OnLight4Props: marketplaceItemV8OnLight4Data,
    marketplaceItemV8OnLight5Props: marketplaceItemV8OnLight5Data,
    marketplaceItemV8OnLight6Props: marketplaceItemV8OnLight6Data,
    elementPaginationCenteredOnLightProps: elementPaginationCenteredOnLightData,
    navigationWebFooterMinimalOnLightProps: navigationWebFooterMinimalOnLight2Data,
};

const buttonsLabelFilledActiveOnLight4Data = {
    children: "Add Album",
};

const buttonsIconOutlineRestingOnLight3Data = {
    children: "",
};

const navigationWebTopBarOnLight3Data = {
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight4Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight3Data,
};

const buttonsIconLabelOutlineRestingOnLigData = {
    children: "View Public Profile",
};

const navigationWebSidebarItemActiveOnLig3Data = {
    icon: "",
    link: "Dashboard",
    className: "navigation-web-sideb-3",
};

const navigationWebSidebarItemRestingOnLi17Data = {
    icon: "",
    link: "Your Collections",
    className: "navigation-web-sideb-1",
};

const navigationWebSidebarItemRestingOnLi18Data = {
    icon: "",
    link: "Favorites",
    className: "item-13",
};

const navigationWebSidebarItemRestingOnLi19Data = {
    icon: "",
    link: "Following",
    className: "item-14",
};

const navigationWebSidebarItemRestingOnLi20Data = {
    icon: "",
    link: "Account Details",
    className: "item-15",
};

const navigationWebSidebarItemRestingOnLi21Data = {
    icon: "",
    link: "Security",
    className: "item-16",
};

const navigationWebSidebarItemRestingOnLi22Data = {
    icon: "",
    link: "Apps",
    className: "item-17",
};

const navigationWebSidebarItemRestingOnLi23Data = {
    icon: "",
    link: "Notifications",
    className: "item-18",
};

const navigationWebSidebarItemRestingOnLi24Data = {
    icon: "",
    link: "Help Center",
    className: "item-copy-2",
};

const navigationWebSidebarMenuOnLight3Data = {
    manageListings: "My Account",
    profileSettings: "Profile settings",
    navigationWebSidebarItemActiveOnLigProps: navigationWebSidebarItemActiveOnLig3Data,
    navigationWebSidebarItemRestingOnLi1Props: navigationWebSidebarItemRestingOnLi17Data,
    navigationWebSidebarItemRestingOnLi2Props: navigationWebSidebarItemRestingOnLi18Data,
    navigationWebSidebarItemRestingOnLi3Props: navigationWebSidebarItemRestingOnLi19Data,
    navigationWebSidebarItemRestingOnLi4Props: navigationWebSidebarItemRestingOnLi20Data,
    navigationWebSidebarItemRestingOnLi5Props: navigationWebSidebarItemRestingOnLi21Data,
    navigationWebSidebarItemRestingOnLi6Props: navigationWebSidebarItemRestingOnLi22Data,
    navigationWebSidebarItemRestingOnLi7Props: navigationWebSidebarItemRestingOnLi23Data,
    navigationWebSidebarItemRestingOnLi8Props: navigationWebSidebarItemRestingOnLi24Data,
};

const listingsWebItemV8OnLight1Data = {
    art: "/img/art-10@2x.png",
    name: "Bored Ape Yacht Club",
    subtitle1: "created on Jan 1, 2022",
    items: "10",
    x7H: "2049",
    price: "4,915",
};

const listingsWebItemV8OnLight2Data = {
    art: "/img/art-6@2x.png",
    name: "Bored Ape Chemistry Club",
    subtitle1: "created on Dec 28, 2021",
    items: "24",
    x7H: "387",
    price: "99.1",
    className: "jobs-list-web-item-v10-1",
};

const listingsWebItemV8OnLight3Data = {
    art: "/img/art-8@2x.png",
    name: "RTFKT CloneX Mintvial",
    subtitle1: "created on Feb 25, 2021",
    items: "6",
    x7H: "167",
    price: "4,310",
    className: "jobs-list-web-item-v10-2",
};

const listingsWebItemV8OnLight4Data = {
    art: "/img/art-9@2x.png",
    name: "Chromie Squiggle by Snowfro",
    subtitle1: "created on Mar 20, 2021",
    items: "18",
    x7H: "46",
    price: "3,905",
    className: "jobs-list-web-item-v10-3",
};

const listingsWebItemV8OnLight5Data = {
    art: "/img/art-7@2x.png",
    name: "Bored Ape Kennel Club",
    subtitle1: "created on Aug 4, 2022",
    items: "17",
    x7H: "32",
    price: "3,570",
    className: "jobs-list-web-item-v10-4",
};

const buttonsLabelIconTransparentRestingO3Data = {
    lable: "Collections",
    icon: "",
    className: "buttons-label-icon-t-2",
};

const buttonsLabelIconTransparentRestingO22Data = {
    children: "Total Tracks",
};

const buttonsLabelIconTransparentRestingO23Data = {
    children: "Total Views",
    className: "buttons-label-icon-t-8",
};

const buttonsLabelIconTransparentRestingO24Data = {
    children: "Total Saves",
    className: "buttons-label-icon-t-9",
};

const elementTagsF5F5FAWIconOnLight1Data = {
    icon: "",
    tag: "Date added",
};

const buttonsIconLabelTransparentRestingO1Data = {
    lable: "24",
    className: "",
};

const marketplaceItemV3OnLight1Data = {
    art: "/img/art@2x.png",
    title: "Andrew Ng",
    img: "/img/img@2x.png",
    name: "Martina Brito",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO1Data,
};

const buttonsIconLabelTransparentRestingO2Data = {
    lable: "32",
    className: "",
};

const marketplaceItemV3OnLight2Data = {
    art: "/img/art-1@2x.png",
    title: "Wait Before Buying",
    img: "/img/img-1@2x.png",
    name: "Azah Anyeni",
    className: "marketplace-item-v1-on-light-copy-4-1",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO2Data,
};

const buttonsIconLabelTransparentRestingO3Data = {
    lable: "19",
    className: "buttons-icon-label-t-1",
};

const marketplaceItemV3OnLight3Data = {
    art: "/img/art-6@2x.png",
    title: "Battle for Digital",
    img: "/img/img-6@2x.png",
    name: "Ham Chuwon",
    className: "marketplace-item-v1-on-light-copy-1",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO3Data,
};

const buttonsIconLabelTransparentRestingO4Data = {
    lable: "16",
    className: "buttons-icon-label-t-2",
};

const marketplaceItemV3OnLight4Data = {
    art: "/img/art-3@2x.png",
    title: "Blazeon Killer",
    img: "/img/img-3@2x.png",
    name: "Lidmila Vilensky",
    className: "marketplace-item-v1-on-light-copy-6-1",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO4Data,
};

const buttonsIconLabelTransparentRestingO5Data = {
    lable: "20",
    className: "",
};

const marketplaceItemV3OnLight5Data = {
    art: "/img/art-5@2x.png",
    title: "A Rare Path",
    img: "/img/img-5@2x.png",
    name: "Langke Zambo",
    className: "marketplace-item-v1-on-light-copy-2",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO5Data,
};

const buttonsIconLabelTransparentRestingO6Data = {
    lable: "28",
    className: "",
};

const marketplaceItemV3OnLight6Data = {
    art: "/img/art-2@2x.png",
    title: "Block Bulk Search",
    img: "/img/img-2@2x.png",
    name: "Salma Fonseca",
    className: "marketplace-item-v1-on-light-copy-5-1",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO6Data,
};

const buttonsLabelFilledRestingOnLight2Data = {
    className: "buttons-label-filled-resting-on-light-3",
};

const links3Data = {
    x2021AllRightsRe: "© 2021 All rights reserved",
};

const buttonsLabelIconTransparentRestingO4Data = {
    lable: "English",
    icon: "",
};

const navigationWebFooterMinimalOnLight3Data = {
    className: "navigation-web-foote-2",
    linksProps: links3Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO4Data,
};

const dashboardData = {
    bg: "/img/bg@1x.png",
    img: "/img/img@2x.png",
    invisibleFriends: "Miles Lathan",
    invisiblefriendscol: "@midawg343",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt interdum laoreet. Suspendisse in metus nisi. Maecenas ac erat purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Suspendisse ac ultricies ipsum. Nulla vel condimentum nulla. Pellentesque ut vulputate arcu. Proin porta condimentum mi tincidunt placerat. Donec imperdiet risus eu lorem luctus dignissim. Mauris at magna enim.",
    name: "Jun 03, 2017",
    createdBy: "member since",
    subtitle1: "Total Views",
    amount1: "126k+",
    subtitle2: "Total Saves",
    amount2: "16k+",
    myCollections: "My Collections",
    myRecentSaves: "My recent saves",
    navigationWebTopBarOnLightProps: navigationWebTopBarOnLight3Data,
    buttonsIconLabelOutlineRestingOnLigProps: buttonsIconLabelOutlineRestingOnLigData,
    navigationWebSidebarMenuOnLight3Props: navigationWebSidebarMenuOnLight3Data,
    listingsWebItemV8OnLight1Props: listingsWebItemV8OnLight1Data,
    listingsWebItemV8OnLight2Props: listingsWebItemV8OnLight2Data,
    listingsWebItemV8OnLight3Props: listingsWebItemV8OnLight3Data,
    listingsWebItemV8OnLight4Props: listingsWebItemV8OnLight4Data,
    listingsWebItemV8OnLight5Props: listingsWebItemV8OnLight5Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO3Data,
    buttonsLabelIconTransparentRestingO21Props: buttonsLabelIconTransparentRestingO22Data,
    buttonsLabelIconTransparentRestingO22Props: buttonsLabelIconTransparentRestingO23Data,
    buttonsLabelIconTransparentRestingO23Props: buttonsLabelIconTransparentRestingO24Data,
    elementTagsF5F5FAWIconOnLightProps: elementTagsF5F5FAWIconOnLight1Data,
    marketplaceItemV3OnLight1Props: marketplaceItemV3OnLight1Data,
    marketplaceItemV3OnLight2Props: marketplaceItemV3OnLight2Data,
    marketplaceItemV3OnLight3Props: marketplaceItemV3OnLight3Data,
    marketplaceItemV3OnLight4Props: marketplaceItemV3OnLight4Data,
    marketplaceItemV3OnLight5Props: marketplaceItemV3OnLight5Data,
    marketplaceItemV3OnLight6Props: marketplaceItemV3OnLight6Data,
    buttonsLabelFilledRestingOnLightProps: buttonsLabelFilledRestingOnLight2Data,
    navigationWebFooterMinimalOnLightProps: navigationWebFooterMinimalOnLight3Data,
};

const buttonsLabelFilledActiveOnLight5Data = {
    children: "Add Album",
};

const buttonsIconOutlineRestingOnLight4Data = {
    children: "",
};

const navigationWebTopBarOnLight4Data = {
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight5Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight4Data,
};

const buttonsIconLabelOutlineRestingOnLig21Data = {
    lable: "68",
};

const buttonsIconOutlineRestingOnLight5Data = {
    children: "",
    className: "buttons-icon-label-f",
};

const buttonsLabelFilledActiveOnLight6Data = {
    children: "Add to collection",
    className: "buttons-label-filled-active-on-light-1",
};

const buttonsLabelFilledRestingOnLight3Data = {
    className: "buttons-label-filled-1",
};

const formsV1SelectRestingonLight1Data = {
    fieldTitle: "",
    placeholder: "Enter your e-mail",
    icon: "",
};

const buttonsSocialWoLableOnLight2Data = {
    className: "buttons-icon-filled",
};

const buttonsSocialWoLableOnLight3Data = {
    className: "buttons-icon-filled-1",
};

const buttonsSocialWoLableOnLight4Data = {
    className: "buttons-icon-filled-2",
};

const buttonsSocialLogoLinkedin1Data = {
    className: "",
};

const buttonsSocialWoLableOnLight22Data = {
    buttonsSocialLogoLinkedinProps: buttonsSocialLogoLinkedin1Data,
};

const links4Data = {
    x2021AllRightsRe: "© 2022 All rights reserved",
    className: "links-3",
};

const buttonsLabelIconTransparentRestingO5Data = {
    lable: "English",
    icon: "",
    className: "buttons-label-icon-t-3",
};

const buttonsIconOutlineRestingOnLight6Data = {
    children: "",
    className: "buttons-icon-outline-resting-on-light",
};

const navigationWebFooterOnLight1Data = {
    formsV1SelectRestingonLightProps: formsV1SelectRestingonLight1Data,
    buttonsSocialWoLableOnLight1Props: buttonsSocialWoLableOnLight2Data,
    buttonsSocialWoLableOnLight2Props: buttonsSocialWoLableOnLight3Data,
    buttonsSocialWoLableOnLight3Props: buttonsSocialWoLableOnLight4Data,
    buttonsSocialWoLableOnLight2Props2: buttonsSocialWoLableOnLight22Data,
    linksProps: links4Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO5Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight6Data,
};

const albumDetailsData = {
    bg: "/img/bg@1x.png",
    livefellaz2452: "LiveFellaz",
    detailsCopy: "by DJ Record Scratch",
    name: "Inspired by the streets of San Diego, DJ Record Scratch makes his EP debut with an arsenal of lofi beats that bring you right there on a blanket in sunny San Diego park.",
    readMore: "Read more",
    subtitle1: "Producer",
    img1: "/img/img---1@2x.png",
    address: "45rpm Records, INC",
    subtitle2: "Other work by the artist",
    img1Copy: "/img/img---1-copy@2x.png",
    title: "LiveFellaz: Unleashed",
    navigationWebTopBarOnLightProps: navigationWebTopBarOnLight4Data,
    buttonsIconLabelOutlineRestingOnLig2Props: buttonsIconLabelOutlineRestingOnLig21Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight5Data,
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight6Data,
    buttonsLabelFilledRestingOnLightProps: buttonsLabelFilledRestingOnLight3Data,
    navigationWebFooterOnLightProps: navigationWebFooterOnLight1Data,
};

const buttonsLabelFilledActiveOnLight7Data = {
    children: "Add Album",
};

const buttonsIconOutlineRestingOnLight7Data = {
    children: "",
};

const navigationWebTopBarOnLight5Data = {
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight7Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight7Data,
};

const buttonsIconLabelOutlineRestingOnLig22Data = {
    lable: "Add to Favorites",
    className: "buttons-icon-label-f-5",
};

const buttonsIconOutlineRestingOnLight8Data = {
    children: "",
    className: "buttons-icon-label-f-1",
};

const buttonsIconOutlineRestingOnLight9Data = {
    children: "",
    className: "buttons-icon-label-f-2",
};

const elementTagsF5F5FAWIconOnLight2Data = {
    icon: "",
    tag: "Date added",
    className: "element-tags-f5-f5-fa-editable-on-light-1",
};

const buttonsIconLabelTransparentRestingO7Data = {
    lable: "24",
    className: "",
};

const marketplaceItemV3OnLight7Data = {
    art: "/img/art@2x.png",
    title: "Andrew Ng",
    img: "/img/img@2x.png",
    name: "Martina Brito",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO7Data,
};

const buttonsIconLabelTransparentRestingO8Data = {
    lable: "32",
    className: "",
};

const marketplaceItemV3OnLight8Data = {
    art: "/img/art-1@2x.png",
    title: "Wait Before Buying",
    img: "/img/img-1@2x.png",
    name: "Azah Anyeni",
    className: "marketplace-item-v1-on-light-copy-4-2",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO8Data,
};

const buttonsIconLabelTransparentRestingO9Data = {
    lable: "19",
    className: "buttons-icon-label-t-3",
};

const marketplaceItemV3OnLight9Data = {
    art: "/img/art-6@2x.png",
    title: "Battle for Digital",
    img: "/img/img-6@2x.png",
    name: "Ham Chuwon",
    className: "marketplace-item-v1-on-light-copy-7",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO9Data,
};

const buttonsIconLabelTransparentRestingO10Data = {
    lable: "16",
    className: "buttons-icon-label-t-4",
};

const marketplaceItemV3OnLight10Data = {
    art: "/img/art-3@2x.png",
    title: "Blazeon Killer",
    img: "/img/img-3@2x.png",
    name: "Lidmila Vilensky",
    className: "marketplace-item-v1-on-light-copy-6-2",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO10Data,
};

const buttonsIconLabelTransparentRestingO11Data = {
    lable: "20",
    className: "",
};

const marketplaceItemV3OnLight11Data = {
    art: "/img/art-5@2x.png",
    title: "A Rare Path",
    img: "/img/img-5@2x.png",
    name: "Langke Zambo",
    className: "marketplace-item-v1-on-light-copy-2-1",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO11Data,
};

const buttonsIconLabelTransparentRestingO12Data = {
    lable: "28",
    className: "",
};

const marketplaceItemV3OnLight12Data = {
    art: "/img/art-2@2x.png",
    title: "Block Bulk Search",
    img: "/img/img-2@2x.png",
    name: "Salma Fonseca",
    className: "marketplace-item-v1-on-light-copy-5-2",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO12Data,
};

const buttonsIconLabelTransparentRestingO13Data = {
    lable: "12",
    className: "buttons-icon-label-t-5",
};

const marketplaceItemV3OnLight13Data = {
    art: "/img/art-7@2x.png",
    title: "Software Secret Algorithms",
    img: "/img/img-7@2x.png",
    name: "Shirai Subaru",
    className: "marketplace-item-v1-on-light-copy-3-1",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO13Data,
};

const buttonsIconLabelTransparentRestingO14Data = {
    lable: "18",
    className: "buttons-icon-label-t-6",
};

const marketplaceItemV3OnLight14Data = {
    art: "/img/art-4@2x.png",
    title: "Repeal of Online Privacy",
    img: "/img/img-4@2x.png",
    name: "Yi Hanying",
    className: "marketplace-item-v1-on-light-copy-7-1",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO14Data,
};

const grid1Data = {
    marketplaceItemV3OnLight1Props: marketplaceItemV3OnLight7Data,
    marketplaceItemV3OnLight2Props: marketplaceItemV3OnLight8Data,
    marketplaceItemV3OnLight3Props: marketplaceItemV3OnLight9Data,
    marketplaceItemV3OnLight4Props: marketplaceItemV3OnLight10Data,
    marketplaceItemV3OnLight5Props: marketplaceItemV3OnLight11Data,
    marketplaceItemV3OnLight6Props: marketplaceItemV3OnLight12Data,
    marketplaceItemV3OnLight7Props: marketplaceItemV3OnLight13Data,
    marketplaceItemV3OnLight8Props: marketplaceItemV3OnLight14Data,
};

const buttonsLabelFilledRestingOnLight4Data = {
    className: "buttons-label-filled-resting-on-light-4",
};

const formsV1SelectRestingonLight2Data = {
    fieldTitle: "",
    placeholder: "Enter your e-mail",
    icon: "",
};

const buttonsSocialWoLableOnLight6Data = {
    className: "buttons-icon-filled-3",
};

const buttonsSocialWoLableOnLight7Data = {
    className: "buttons-icon-filled-4",
};

const buttonsSocialWoLableOnLight8Data = {
    className: "buttons-icon-filled-5",
};

const buttonsSocialLogoLinkedin2Data = {
    className: "buttons-social-logo-linkedin-1",
};

const buttonsSocialWoLableOnLight23Data = {
    buttonsSocialLogoLinkedinProps: buttonsSocialLogoLinkedin2Data,
};

const links5Data = {
    x2021AllRightsRe: "© 2022 All rights reserved",
    className: "links-4",
};

const buttonsLabelIconTransparentRestingO6Data = {
    lable: "English",
    icon: "",
    className: "buttons-label-icon-t-4",
};

const buttonsIconOutlineRestingOnLight10Data = {
    children: "",
    className: "buttons-icon-outline-resting-on-light-1",
};

const navigationWebFooterOnLight2Data = {
    className: "navigation-web-footer-bar-on-light-copy-1",
    formsV1SelectRestingonLightProps: formsV1SelectRestingonLight2Data,
    buttonsSocialWoLableOnLight1Props: buttonsSocialWoLableOnLight6Data,
    buttonsSocialWoLableOnLight2Props: buttonsSocialWoLableOnLight7Data,
    buttonsSocialWoLableOnLight3Props: buttonsSocialWoLableOnLight8Data,
    buttonsSocialWoLableOnLight2Props2: buttonsSocialWoLableOnLight23Data,
    linksProps: links5Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO6Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight10Data,
};

const collectionData = {
    bg: "/img/bg@1x.png",
    img: "/img/img@2x.png",
    invisibleFriends: "Invisible Friends",
    invisiblefriendscol: "@midawg343",
    name1: "Miles Lathan",
    createdBy: "created by",
    subtitle1: "Total Views",
    amount1: "126k+",
    subtitle2: "Total Saves",
    amount2: "16k+",
    name2: "Inivisble friends is a collection of classic lounge hits from 2010’s Berlin artists. Close your eyes and imagine yourself walking down the streets of Berlin and groove...",
    navigationWebTopBarOnLightProps: navigationWebTopBarOnLight5Data,
    buttonsIconLabelOutlineRestingOnLig2Props: buttonsIconLabelOutlineRestingOnLig22Data,
    buttonsIconOutlineRestingOnLight1Props: buttonsIconOutlineRestingOnLight8Data,
    buttonsIconOutlineRestingOnLight2Props: buttonsIconOutlineRestingOnLight9Data,
    elementTagsF5F5FAWIconOnLightProps: elementTagsF5F5FAWIconOnLight2Data,
    gridProps: grid1Data,
    buttonsLabelFilledRestingOnLightProps: buttonsLabelFilledRestingOnLight4Data,
    navigationWebFooterOnLightProps: navigationWebFooterOnLight2Data,
};

const buttonsLabelFilledActiveOnLight8Data = {
    children: "Add Album",
};

const buttonsIconOutlineRestingOnLight11Data = {
    children: "",
};

const navigationWebTopBarOnLight6Data = {
    className: "navigation-web-top-b-2",
    buttonsLabelFilledActiveOnLightProps: buttonsLabelFilledActiveOnLight8Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight11Data,
};

const elementTagsF5F5FAOutlineOnLight1Data = {
    tag: "Trending",
};

const elementTagsF5F5FAOutlineOnLight2Data = {
    tag: "What’s New",
    className: "element-tags-f5-f5-f-2",
};

const elementTagsF5F5FAOutlineOnLight3Data = {
    tag: "Classics",
    className: "element-tags-f5-f5-f-3",
};

const elementTagsF5F5FAWIconOnLight3Data = {
    icon: "",
    tag: "Apply filter",
    className: "element-tags-f5-f5-f",
};

const elementTagsF5F5FAWIconOnLight4Data = {
    icon: "",
    tag: "Sort by",
    className: "element-tags-f5-f5-fa-editable-on-light-2",
};

const buttonsIconLabelTransparentRestingO15Data = {
    lable: "24",
    className: "",
};

const marketplaceItemV3OnLight15Data = {
    art: "/img/art@2x.png",
    title: "Andrew Ng",
    img: "/img/img@2x.png",
    name: "Martina Brito",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO15Data,
};

const buttonsIconLabelTransparentRestingO16Data = {
    lable: "32",
    className: "",
};

const marketplaceItemV3OnLight16Data = {
    art: "/img/art-1@2x.png",
    title: "Wait Before Buying",
    img: "/img/img-1@2x.png",
    name: "Azah Anyeni",
    className: "marketplace-item-v1-on-light-copy-4-3",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO16Data,
};

const buttonsIconLabelTransparentRestingO17Data = {
    lable: "19",
    className: "buttons-icon-label-t-7",
};

const marketplaceItemV3OnLight17Data = {
    art: "/img/art-6@2x.png",
    title: "Battle for Digital",
    img: "/img/img-6@2x.png",
    name: "Ham Chuwon",
    className: "marketplace-item-v1-on-light-copy-8",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO17Data,
};

const buttonsIconLabelTransparentRestingO18Data = {
    lable: "16",
    className: "buttons-icon-label-t-8",
};

const marketplaceItemV3OnLight18Data = {
    art: "/img/art-3@2x.png",
    title: "Blazeon Killer",
    img: "/img/img-3@2x.png",
    name: "Lidmila Vilensky",
    className: "marketplace-item-v1-on-light-copy-6-3",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO18Data,
};

const buttonsIconLabelTransparentRestingO19Data = {
    lable: "20",
    className: "",
};

const marketplaceItemV3OnLight19Data = {
    art: "/img/art-5@2x.png",
    title: "A Rare Path",
    img: "/img/img-5@2x.png",
    name: "Langke Zambo",
    className: "marketplace-item-v1-on-light-copy-2-2",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO19Data,
};

const buttonsIconLabelTransparentRestingO20Data = {
    lable: "28",
    className: "",
};

const marketplaceItemV3OnLight20Data = {
    art: "/img/art-2@2x.png",
    title: "Block Bulk Search",
    img: "/img/img-2@2x.png",
    name: "Salma Fonseca",
    className: "marketplace-item-v1-on-light-copy-5-3",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO20Data,
};

const buttonsIconLabelTransparentRestingO21Data = {
    lable: "12",
    className: "buttons-icon-label-t-9",
};

const marketplaceItemV3OnLight21Data = {
    art: "/img/art-7@2x.png",
    title: "Software Secret Algorithms",
    img: "/img/img-7@2x.png",
    name: "Shirai Subaru",
    className: "marketplace-item-v1-on-light-copy-3-2",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO21Data,
};

const buttonsIconLabelTransparentRestingO22Data = {
    lable: "18",
    className: "buttons-icon-label-t-10",
};

const marketplaceItemV3OnLight22Data = {
    art: "/img/art-4@2x.png",
    title: "Repeal of Online Privacy",
    img: "/img/img-4@2x.png",
    name: "Yi Hanying",
    className: "marketplace-item-v1-on-light-copy-7-2",
    buttonsIconLabelTransparentRestingOProps: buttonsIconLabelTransparentRestingO22Data,
};

const grid2Data = {
    className: "grid-3",
    marketplaceItemV3OnLight1Props: marketplaceItemV3OnLight15Data,
    marketplaceItemV3OnLight2Props: marketplaceItemV3OnLight16Data,
    marketplaceItemV3OnLight3Props: marketplaceItemV3OnLight17Data,
    marketplaceItemV3OnLight4Props: marketplaceItemV3OnLight18Data,
    marketplaceItemV3OnLight5Props: marketplaceItemV3OnLight19Data,
    marketplaceItemV3OnLight6Props: marketplaceItemV3OnLight20Data,
    marketplaceItemV3OnLight7Props: marketplaceItemV3OnLight21Data,
    marketplaceItemV3OnLight8Props: marketplaceItemV3OnLight22Data,
};

const buttonsLabelFilledRestingOnLight5Data = {
    className: "buttons-label-filled-resting-on-light-5",
};

const formsV1SelectRestingonLight3Data = {
    fieldTitle: "",
    placeholder: "Enter your e-mail",
    icon: "",
};

const buttonsSocialWoLableOnLight10Data = {
    className: "buttons-icon-filled-6",
};

const buttonsSocialWoLableOnLight11Data = {
    className: "buttons-icon-filled-7",
};

const buttonsSocialWoLableOnLight12Data = {
    className: "buttons-icon-filled-8",
};

const buttonsSocialLogoLinkedin3Data = {
    className: "",
};

const buttonsSocialWoLableOnLight24Data = {
    buttonsSocialLogoLinkedinProps: buttonsSocialLogoLinkedin3Data,
};

const links6Data = {
    x2021AllRightsRe: "© 2022 All rights reserved",
    className: "links-5",
};

const buttonsLabelIconTransparentRestingO7Data = {
    lable: "English",
    icon: "",
    className: "buttons-label-icon-t-5",
};

const buttonsIconOutlineRestingOnLight12Data = {
    children: "",
    className: "buttons-icon-outline-resting-on-light-2",
};

const navigationWebFooterOnLight3Data = {
    className: "navigation-web-footer-bar-on-light-copy-2",
    formsV1SelectRestingonLightProps: formsV1SelectRestingonLight3Data,
    buttonsSocialWoLableOnLight1Props: buttonsSocialWoLableOnLight10Data,
    buttonsSocialWoLableOnLight2Props: buttonsSocialWoLableOnLight11Data,
    buttonsSocialWoLableOnLight3Props: buttonsSocialWoLableOnLight12Data,
    buttonsSocialWoLableOnLight2Props2: buttonsSocialWoLableOnLight24Data,
    linksProps: links6Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO7Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight12Data,
};

const marketplaceData = {
    exploreNfts: "Explore Albums",
    navigationWebTopBarOnLightProps: navigationWebTopBarOnLight6Data,
    elementTagsF5F5FAOutlineOnLight1Props: elementTagsF5F5FAOutlineOnLight1Data,
    elementTagsF5F5FAOutlineOnLight2Props: elementTagsF5F5FAOutlineOnLight2Data,
    elementTagsF5F5FAOutlineOnLight3Props: elementTagsF5F5FAOutlineOnLight3Data,
    elementTagsF5F5FAWIconOnLight1Props: elementTagsF5F5FAWIconOnLight3Data,
    elementTagsF5F5FAWIconOnLight2Props: elementTagsF5F5FAWIconOnLight4Data,
    gridProps: grid2Data,
    buttonsLabelFilledRestingOnLightProps: buttonsLabelFilledRestingOnLight5Data,
    navigationWebFooterOnLightProps: navigationWebFooterOnLight3Data,
};

const buttonsLabelFilledActiveOnLight9Data = {
    children: "Sign Up",
    className: "buttons-label-filled-active-on-light-2",
};

const elementLogoHidden7Data = {
    className: "element-logo-hidden-2",
};

const formsV1SelectActiveonLight1Data = {
    fieldTitle: "Enter your email",
    placeholder: "midawg@gmail.com",
    icon: "",
};

const formsV1SelectRestingonLight4Data = {
    fieldTitle: "Field title",
    placeholder: "Enter your password",
    icon: "",
    className: "forms-v1-select-restingon-light-2",
};

const formsGeneralRadioRestingonLightData = {
    children: "Remember me",
};

const buttonsLabelFilledActiveOnLight10Data = {
    children: "Sign In",
    className: "buttons-label-filled-active-on-light-3",
};

const buttonsSocialWLableOnLight1Data = {
    lable: "Sign Up with Google",
};

const buttonsSocialWLableOnLight2Data = {
    lable: "Sign Up with Facebook",
    className: "buttons-social-w-lable-on-light-1",
};

const buttonsSocialWLableOnLight3Data = {
    lable: "Sign Up with Twitter",
    className: "buttons-social-w-lable-on-light-2",
};

const registrationSignInBasicData = {
    aHighlyCuratedPla: "A highly-curated platform for discovering and building your vinyl collection.",
    youDontHaveAnAc: "You don’t have an account?",
    signIn: "Sign in",
    takeTheNextStepA: "Take the next step and sign in to your account",
    recoverPassword: "Recover password",
    or: "or",
    buttonsLabelFilledActiveOnLight1Props: buttonsLabelFilledActiveOnLight9Data,
    elementLogoHiddenProps: elementLogoHidden7Data,
    formsV1SelectActiveonLightProps: formsV1SelectActiveonLight1Data,
    formsV1SelectRestingonLightProps: formsV1SelectRestingonLight4Data,
    formsGeneralRadioRestingonLightProps: formsGeneralRadioRestingonLightData,
    buttonsLabelFilledActiveOnLight2Props: buttonsLabelFilledActiveOnLight10Data,
    buttonsSocialWLableOnLight1Props: buttonsSocialWLableOnLight1Data,
    buttonsSocialWLableOnLight2Props: buttonsSocialWLableOnLight2Data,
    buttonsSocialWLableOnLight3Props: buttonsSocialWLableOnLight3Data,
};

const buttonsIconFilledActiveOnLightData = {
    children: "",
};

const elementTags00D066Soft2Data = {
    className: "element-tags-00-d066-soft",
};

const buttonsIconLabelTransparentRestingO23Data = {
    lable: "24",
    className: "buttons-icon-label-t-11",
};

const marketplaceItemV7OnLight1Data = {
    buttonsIconLabelTransparentRestingO: elementTags00D066Soft2Data,
    buttonsIconLabelTransparentRestingO2: buttonsIconLabelTransparentRestingO23Data,
};

const buttonsIconLabelTransparentRestingO24Data = {
    lable: "32",
    className: "buttons-icon-label-t-12",
};

const marketplaceItemV7OnLight21Data = {
    art: "/img/art@2x.png",
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO24Data,
};

const buttonsIconLabelTransparentRestingO25Data = {
    lable: "20",
    className: "buttons-icon-label-t-13",
};

const marketplaceItemV7OnLight22Data = {
    art: "/img/art-3@2x.png",
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO25Data,
};

const buttonsIconLabelTransparentRestingO26Data = {
    lable: "28",
    className: "buttons-icon-label-t-14",
};

const marketplaceItemV7OnLight31Data = {
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO26Data,
};

const authorWebItemV3OnLight1Data = {
    viewCount: "viewed 8k+ times",
    number: "1",
    art: "/img/art-16@2x.png",
};

const authorWebItemV3OnLight2Data = {
    viewCount: "viewed 4.3k+ times",
    number: "2",
    art: "/img/art-8@2x.png",
    className: "collections-list-web-item-v10-1",
};

const authorWebItemV3OnLight3Data = {
    viewCount: "viewed 2.5k+ times",
    number: "3",
    art: "/img/art-13@2x.png",
    className: "collections-list-web-item-v10-2",
};

const authorWebItemV3OnLight4Data = {
    viewCount: "viewed 2k+ times",
    number: "4",
    art: "/img/art-15@2x.png",
    className: "collections-list-web-item-v10-3",
};

const authorWebItemV3OnLight5Data = {
    viewCount: "viewed 1.7k+ times",
    number: "5",
    art: "/img/art-11@2x.png",
    className: "collections-list-web-item-v10-4",
};

const authorWebItemV3OnLight6Data = {
    viewCount: "viewed 1.6k+ times",
    number: "6",
    art: "/img/art-9@2x.png",
    className: "collections-list-web-item-v10-copy",
};

const authorWebItemV3OnLight7Data = {
    viewCount: "viewed 1.3k+ times",
    number: "7",
    art: "/img/art-14@2x.png",
    className: "collections-list-web-item-v10-copy-2",
};

const authorWebItemV3OnLight8Data = {
    viewCount: "viewed 1.3k+ times",
    number: "8",
    art: "/img/art-12@2x.png",
    className: "collections-list-web-item-v10-copy-4",
};

const authorWebItemV3OnLight9Data = {
    viewCount: "viewed 1k+ times",
    number: "9",
    art: "/img/art-10@2x.png",
    className: "collections-list-web-item-v10-copy-3",
};

const buttonsLabelFilledRestingOnLight6Data = {
    className: "buttons-label-filled-2",
};

const elementTags00D066Soft3Data = {
    className: "element-tags-00-d066-soft-1",
};

const buttonsIconLabelTransparentRestingO27Data = {
    lable: "24",
    className: "buttons-icon-label-t-15",
};

const marketplaceItemV7OnLight4Data = {
    buttonsIconLabelTransparentRestingO: elementTags00D066Soft3Data,
    buttonsIconLabelTransparentRestingO2: buttonsIconLabelTransparentRestingO27Data,
};

const buttonsIconLabelTransparentRestingO28Data = {
    lable: "32",
    className: "buttons-icon-label-t-16",
};

const marketplaceItemV7OnLight23Data = {
    art: "/img/art@2x.png",
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO28Data,
};

const buttonsIconLabelTransparentRestingO29Data = {
    lable: "20",
    className: "buttons-icon-label-t-17",
};

const marketplaceItemV7OnLight24Data = {
    art: "/img/art-3@2x.png",
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO29Data,
};

const buttonsIconLabelTransparentRestingO30Data = {
    lable: "28",
    className: "buttons-icon-label-t-18",
};

const marketplaceItemV7OnLight32Data = {
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO30Data,
};

const trendingAlbums1Data = {
    marketplaceItemV7OnLightProps: marketplaceItemV7OnLight4Data,
    marketplaceItemV7OnLight21Props: marketplaceItemV7OnLight23Data,
    marketplaceItemV7OnLight22Props: marketplaceItemV7OnLight24Data,
    marketplaceItemV7OnLight3Props: marketplaceItemV7OnLight32Data,
};

const buttonsIconOutlineRestingOnLight13Data = {
    children: "",
    className: "buttons-icon-outline",
};

const buttonsIconOutlineRestingOnLight14Data = {
    children: "",
    className: "buttons-icon-outline-resting-on-light-3",
};

const elementTabsLabelActiveOnLightData = {
    children: "All",
};

const elementTabsLabelRestingOnLight1Data = {
    children: "Trending",
};

const elementTabsLabelRestingOnLight2Data = {
    children: "What’s New",
    className: "element-tags-f5-f5-f-5",
};

const elementTabsLabelRestingOnLight3Data = {
    children: "Classics",
    className: "element-tags-f5-f5-f-6",
};

const elementTags00D066Soft4Data = {
    className: "element-tags-00-d066-soft-2",
};

const buttonsIconLabelTransparentRestingO31Data = {
    lable: "24",
    className: "buttons-icon-label-t-19",
};

const marketplaceItemV7OnLight5Data = {
    buttonsIconLabelTransparentRestingO: elementTags00D066Soft4Data,
    buttonsIconLabelTransparentRestingO2: buttonsIconLabelTransparentRestingO31Data,
};

const buttonsIconLabelTransparentRestingO32Data = {
    lable: "32",
    className: "buttons-icon-label-t-20",
};

const marketplaceItemV7OnLight25Data = {
    art: "/img/art@2x.png",
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO32Data,
};

const buttonsIconLabelTransparentRestingO33Data = {
    lable: "20",
    className: "buttons-icon-label-t-21",
};

const marketplaceItemV7OnLight26Data = {
    art: "/img/art-3@2x.png",
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO33Data,
};

const buttonsIconLabelTransparentRestingO34Data = {
    lable: "28",
    className: "buttons-icon-label-t-22",
};

const marketplaceItemV7OnLight33Data = {
    buttonsIconLabelTransparentRestingO: buttonsIconLabelTransparentRestingO34Data,
};

const trendingAlbums2Data = {
    className: "popular-albums",
    marketplaceItemV7OnLightProps: marketplaceItemV7OnLight5Data,
    marketplaceItemV7OnLight21Props: marketplaceItemV7OnLight25Data,
    marketplaceItemV7OnLight22Props: marketplaceItemV7OnLight26Data,
    marketplaceItemV7OnLight3Props: marketplaceItemV7OnLight33Data,
};

const buttonsLabelFilledRestingOnLight7Data = {
    className: "buttons-label-filled-resting-on-light-6",
};

const formsV1SelectRestingonLight5Data = {
    fieldTitle: "",
    placeholder: "Enter your e-mail",
    icon: "",
};

const buttonsSocialWoLableOnLight14Data = {
    className: "buttons-icon-filled-9",
};

const buttonsSocialWoLableOnLight15Data = {
    className: "buttons-icon-filled-10",
};

const buttonsSocialWoLableOnLight16Data = {
    className: "buttons-icon-filled-11",
};

const buttonsSocialLogoLinkedin4Data = {
    className: "buttons-social-logo-linkedin-3",
};

const buttonsSocialWoLableOnLight25Data = {
    buttonsSocialLogoLinkedinProps: buttonsSocialLogoLinkedin4Data,
};

const links7Data = {
    x2021AllRightsRe: "© 2022 All rights reserved",
    className: "links-6",
};

const buttonsLabelIconTransparentRestingO8Data = {
    lable: "English",
    icon: "",
    className: "buttons-label-icon-t-6",
};

const buttonsIconOutlineRestingOnLight15Data = {
    children: "",
    className: "buttons-icon-outline-resting-on-light-4",
};

const navigationWebFooterOnLight4Data = {
    className: "navigation-web-footer-bar-on-light-copy-3",
    formsV1SelectRestingonLightProps: formsV1SelectRestingonLight5Data,
    buttonsSocialWoLableOnLight1Props: buttonsSocialWoLableOnLight14Data,
    buttonsSocialWoLableOnLight2Props: buttonsSocialWoLableOnLight15Data,
    buttonsSocialWoLableOnLight3Props: buttonsSocialWoLableOnLight16Data,
    buttonsSocialWoLableOnLight2Props2: buttonsSocialWoLableOnLight25Data,
    linksProps: links7Data,
    buttonsLabelIconTransparentRestingOProps: buttonsLabelIconTransparentRestingO8Data,
    buttonsIconOutlineRestingOnLightProps: buttonsIconOutlineRestingOnLight15Data,
};

const landingData = {
    discoverCollectA: "Discover and build your vinyl collection.",
    ourMarketplaceIs: "MyRecords is the world's largest collection of vinyl from the best artists worldwide.",
    fieldTitle: "Search vinyl, artists, and collections",
    selectedNotableDro: "What the world is listening to",
    navigationWebTopBarWLinksOnlightCop: TopImage,
    mostViewedCollections: "Most viewed collections",
    last7Days: "last 7 days",
    arrow: "",
    trendingAlbums: "Trending Albums",
    browsePopularAlbums: "Browse popular albums",
    buttonsIconFilledActiveOnLightProps: buttonsIconFilledActiveOnLightData,
    marketplaceItemV7OnLightProps: marketplaceItemV7OnLight1Data,
    marketplaceItemV7OnLight21Props: marketplaceItemV7OnLight21Data,
    marketplaceItemV7OnLight22Props: marketplaceItemV7OnLight22Data,
    marketplaceItemV7OnLight3Props: marketplaceItemV7OnLight31Data,
    authorWebItemV3OnLight1Props: authorWebItemV3OnLight1Data,
    authorWebItemV3OnLight2Props: authorWebItemV3OnLight2Data,
    authorWebItemV3OnLight3Props: authorWebItemV3OnLight3Data,
    authorWebItemV3OnLight4Props: authorWebItemV3OnLight4Data,
    authorWebItemV3OnLight5Props: authorWebItemV3OnLight5Data,
    authorWebItemV3OnLight6Props: authorWebItemV3OnLight6Data,
    authorWebItemV3OnLight7Props: authorWebItemV3OnLight7Data,
    authorWebItemV3OnLight8Props: authorWebItemV3OnLight8Data,
    authorWebItemV3OnLight9Props: authorWebItemV3OnLight9Data,
    buttonsLabelFilledRestingOnLightPro: buttonsLabelFilledRestingOnLight6Data,
    trendingAlbums1Props: trendingAlbums1Data,
    buttonsIconOutlineRestingOnLight1Pr: buttonsIconOutlineRestingOnLight13Data,
    buttonsIconOutlineRestingOnLight2Pr: buttonsIconOutlineRestingOnLight14Data,
    elementTabsLabelActiveOnLightProps: elementTabsLabelActiveOnLightData,
    elementTabsLabelRestingOnLight1Prop: elementTabsLabelRestingOnLight1Data,
    elementTabsLabelRestingOnLight2Prop: elementTabsLabelRestingOnLight2Data,
    elementTabsLabelRestingOnLight3Prop: elementTabsLabelRestingOnLight3Data,
    trendingAlbums2Props: trendingAlbums2Data,
    buttonsLabelFilledRestingOnLightPro2: buttonsLabelFilledRestingOnLight7Data,
    navigationWebFooterOnLightProps: navigationWebFooterOnLight4Data,
};

const buttonsLabelFilledActiveOnLight11Data = {
    children: "Sign In",
    className: "buttons-label-filled-active-on-light-4",
};

const elementLogoHidden8Data = {
    className: "element-logo-hidden-3",
};

const formsV1SelectActiveonLight2Data = {
    fieldTitle: "Full Name",
    placeholder: "Miles “Midawg” Lathan",
    icon: "",
    className: "forms-v1-select-activeon-light-1",
};

const formsV1SelectRestingonLight6Data = {
    fieldTitle: "Email",
    placeholder: "Enter your email",
    icon: "",
    className: "forms-v1-select-restingon-light-3",
};

const formsV1SelectRestingonLight7Data = {
    fieldTitle: "Username",
    placeholder: "Create your username",
    icon: "",
    className: "forms-v1-select-restingon-light-copy-2",
};

const formsV1SelectRestingonLight8Data = {
    fieldTitle: "Password",
    placeholder: "Enter your password",
    icon: "",
    className: "forms-v1-select-restingon-light-copy-3",
};

const formsV1SelectRestingonLight9Data = {
    fieldTitle: "Confirm Password",
    placeholder: "Confirm your password",
    icon: "",
    className: "forms-v1-select-restingon-light-copy",
};

const buttonsLabelFilledActiveOnLight12Data = {
    children: "Submit and Continue",
    className: "buttons-label-filled",
};

const registrationSignInBasicDetailsData = {
    aHighlyCuratedPla: "A highly-curated platform for discovering and building your vinyl collection.",
    youAlreadyHaveAn: "You already have an account?",
    signUp: "Sign Up",
    takeTheNextStepA: "Take the next step and sign up to your account",
    buttonsLabelFilledActiveOnLight1Props: buttonsLabelFilledActiveOnLight11Data,
    elementLogoHiddenProps: elementLogoHidden8Data,
    formsV1SelectActiveonLightProps: formsV1SelectActiveonLight2Data,
    formsV1SelectRestingonLight1Props: formsV1SelectRestingonLight6Data,
    formsV1SelectRestingonLight2Props: formsV1SelectRestingonLight7Data,
    formsV1SelectRestingonLight3Props: formsV1SelectRestingonLight8Data,
    formsV1SelectRestingonLight4Props: formsV1SelectRestingonLight9Data,
    buttonsLabelFilledActiveOnLight2Props: buttonsLabelFilledActiveOnLight12Data,
};