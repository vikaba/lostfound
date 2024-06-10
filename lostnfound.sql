DROP DATABASE IF EXISTS lostnfound;
CREATE DATABASE lostnfound;
USE lostnfound;

CREATE TABLE locations
(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR (100) NOT NULL UNIQUE
);

INSERT INTO locations VALUES
(NULL, '10 Coventry Street (CV)'),
(NULL, '142-148 Hemenway St.'),
(NULL, '319 Huntington Ave. (319)'),
(NULL, '337 Huntington Ave. (337)'),
(NULL, '407 Huntington Ave. (407)'),
(NULL, '780 Columbus Ave. (780) Parking'),
(NULL, 'Architecture Studio (AS) Ruggles Center'),
(NULL, 'Arena Parking Area Gainsborough St.'),
(NULL, 'Asian-American Center (AC) 109 Hemenway St.'),
(NULL, 'Badger-Rosen SquashBusters Center (SB) 795 Columbus Ave.'),
(NULL, 'Barletta Natarorium (BN) 400-402 Huntington Ave.'),
(NULL, 'Behrakis Health Sciences Center (BK) 30 Leon St.'),
(NULL, 'Belvidere Place (BV) 101 Belvidere St.'),
(NULL, 'Blackman Auditorium (AUDL) 360 Huntington Ave.'),
(NULL, 'Burstein Hall (BU) 458 Huntington Ave.'),
(NULL, 'Cabot Physical Education Center (CB) 400 Huntington Ave.'),
(NULL, 'Cahners Hall (CA) 110 The Fenway'),
(NULL, 'Camden Parking Area Camden St.'),
(NULL, 'Cargill Hall (CG) 45 Forsyth St.'),
(NULL, 'Catholic Center  68 St. Stephen St.'),
(NULL, 'Churchill Hall (CH) 380 Huntington Ave.'),
(NULL, 'Columbus Parking Area Columbus Ave.'),
(NULL, 'Columbus Parking Garage Columbus Ave.'),
(NULL, 'Columbus Place (CP) & Alumni Center (CP) 716 Columbus Ave.'),
(NULL, 'Cullinane Hall (CN) 288 Huntington Ave.'),
(NULL, 'Curry Student Center (CSC) 346 Huntington Ave.'),
(NULL, 'Cushing Hall (CU) 102 The Fenway'),
(NULL, 'Dana Research Center (DA) 110 Forsyth St.'),
(NULL, 'Davenport Commons A: 700 Columbus Ave.'),
(NULL, 'Davenport Commons B: 696 Columbus Ave.'),
(NULL, 'Dockser Hall (DK) 65 Forsyth St.'),
(NULL, 'Dodge Hall (DG) 324 Huntington Ave.'),
(NULL, 'Egan Engineering/Science Research Center (EC) & Raytheon Amphitheater 120 Forsyth St.'),
(NULL, 'Ell Hall (EL) 346 Huntington Ave.'),
(NULL, 'Fenway Center (FC) 77 St. Stephens St.'),
(NULL, 'Forsyth Building (FR) 70 Forsyth St.'),
(NULL, 'Gainsborough Parking Garage Gainsborough St.'),
(NULL, 'Hayden Hall (HA) 370 Huntington Ave.'),
(NULL, 'Hillel-Frager (HF) 70 St. Stephen St.'),
(NULL, 'Holmes Hall (HO) 39-41 Leon St.'),
(NULL, 'Hurtig Hall (HT)334 Huntington Ave.'),
(NULL, 'Hurtig Parking Area Gainsborough St.'),
(NULL, 'International Village (INV) 1155-75 Tremont St.'),
(NULL, 'John D. OBryant African-American Institute (AF) 40 Leon St.'),
(NULL, 'Kariotis Hall (KA) 55 Forsyth St.'),
(NULL, 'Kennedy Hall (KDY) 119 Hemenway St.'),
(NULL, 'Kerr Hall (KH) 96 The Fenway'),
(NULL, 'Knowles Center (KN) 416 Huntington Ave.'),
(NULL, 'Lake Hall (LA) 43 Leon St.'),
(NULL, 'Latino/a Student Cultural Center (LC) 104 Forsyth St.'),
(NULL, 'Levine Hall and St. Stephen St. Complex (LV or SS) 122 St. Stephen St.'),
(NULL, 'Light Hall (LH) 81-83 St. Stephen St.'),
(NULL, 'Loftman Hall and 153 Hemenway St. (LF) Loftman: 157 Hemenway St.'),
(NULL, 'Marino Recreation Center (MC) 359-369 Huntington Ave.'),
(NULL, 'Matthews Arena (MA) 238-262 St. Botolph St.'),
(NULL, 'Melvin Hall (MH) 90 The Fenway'),
(NULL, 'Meserve Hall (ME) 35-37 Leon St.'),
(NULL, 'Mugar Life Sciences Building (MU) 330 Huntington Ave.'),
(NULL, 'Nightingale Hall (NI) 105-107 Forsyth St.'),
(NULL, 'North Parking Area St. Stephens St.'),
(NULL, 'Power Plant'),
(NULL, 'Renaissance Park (RP) 1135 Tremont St.'),
(NULL, 'Renaissance Park Garage 835 Columbus Ave.'),
(NULL, 'Richards Hall (RI) 360 Huntington Ave.'),
(NULL, 'Robinson Hall (RB) 336 Huntington Ave.'),
(NULL, 'ROTC Office 335A Huntington Ave.'),
(NULL, 'Rubenstein Hall (464) 464 Huntington Ave.'),
(NULL, 'Ryder Hall (RY) 11 Leon St.'),
(NULL, 'Shillman Hall (SH) 115 Forsyth St.'),
(NULL, 'Smith Hall (SM) 129 Hemenway St.'),
(NULL, 'Snell Engineering Center (SN) 110 Forsyth St.'),
(NULL, 'Snell Library 376 Huntington Ave.'),
(NULL, 'Speare Hall (SP) 10 Speare Pl.'),
(NULL, 'Stearns Center (ST) 420 Huntington Ave.'),
(NULL, 'Stetson East (SE) 11 Speare Pl.'),
(NULL, 'Stetson West (SW) 10 Forsyth St.'),
(NULL, 'West Village A North: 500 Parker St.'),
(NULL, 'West Village A South: 510 Parker St.'),
(NULL, 'West Village B: 460 Parker St.'),
(NULL, 'West Village C: 480 Parker St.'),
(NULL, 'West Village E: 10 Leon St.'),
(NULL, 'West Village F 40A Leon St.'),
(NULL, 'West Village G 450 Parker St.'),
(NULL, 'West Village H: 440 Huntington Ave.'),
(NULL, 'West Village Parking Garage Leon St.'),
(NULL, 'White Hall (WH) 21 Forsyth St.'),
(NULL, 'Willis Hall (WI) 50 Leon St.'),
(NULL, 'YMCA (YMCA) 316 Huntington Ave.');

CREATE TABLE contacts
(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
pw VARCHAR(50) NOT NULL,
session_key VARCHAR(50)
);

INSERT INTO contacts VALUES (1, "admin", "admin@admin.com",  "admin-pw");

CREATE TABLE found_items
(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
description VARCHAR(100) NOT NULL,
contact_id INT NOT NULL,
location_id INT NOT NULL,
date DATETIME NOT NULL,
CONSTRAINT location_id_fk
	FOREIGN KEY (location_id)
    REFERENCES locations (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT contact_id_fk
	FOREIGN KEY (contact_id)
    REFERENCES contacts (id)
    ON UPDATE CASCADE ON DELETE CASCADE
);