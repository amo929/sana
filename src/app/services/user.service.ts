import { Injectable } from '@angular/core';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  sanauser: User;
  current: number = 1;

  constructor() { }

  // A LOT OF GETTERS AND SETTERS
  // USER INFO
  getId(): number {
    return this.sanauser.id;
  }
  setId(n: number): void {
    this.sanauser.id = n;
  }
  getEmail(): string {
    return this.sanauser.email;
  }
  setEmail(str: string): void {
    this.sanauser.email = str;
  }
  getFirstname(): string {
    return this.sanauser.firstname;
  }
  setFirstname(str: string): void {
    this.sanauser.firstname = str;
  }
  getLastname(): string {
    return this.sanauser.lastname;
  }
  setLastname(str: string): void {
    this.sanauser.lastname = str;
  }
  getPassword(): string {
    return this.sanauser.password;
  }
  setPassword(str: string): void {
    this.sanauser.password = str;
  }

  // STORY CHOICE INFO
  getZipcode(): string {
    return this.sanauser.zipcode;
  }
  setZipcode(str: string): void {
    this.sanauser.zipcode = str;
  }
  getSpouse(): number {
    return this.sanauser.spouse;
  }
  setSpouse(n: number): void {
    this.sanauser.spouse = n;
  }
  getChildren(): number {
    return this.sanauser.children;
  }
  setChildren(n: number): void {
    this.sanauser.children = n;
  }
  getAge(): string {
    return this.sanauser.age;
  }
  setAge(str: string): void {
    this.sanauser.age = str;
  }
  getGender(): string {
    return this.sanauser.gender;
  }
  setGender(str: string): void {
    this.sanauser.gender = str;
  }
  getSmoker(): number {
    return this.sanauser.smoker;
  }
  setSmoker(n: number): void {
    this.sanauser.smoker = n;
  }
  getHBP(): number {
    return this.sanauser.hbp;
  }
  setHBP(n: number): void {
    this.sanauser.hbp = n;
  }
  getDiabetes(): number {
    return this.sanauser.diabetes;
  }
  setDiabetes(n: number): void {
    this.sanauser.diabetes = n;
  }
  getSurgery(): number {
    return this.sanauser.surgery;
  }
  setSurgery(n: number): void {
    this.sanauser.surgery = n;
  }
  getAllergy(): number {
    return this.sanauser.allergy;
  }
  setAllergy(n: number): void {
    this.sanauser.allergy = n;
  }
  getPlanMult(): number {
    return this.sanauser.plan_mult;
  }
  setPlanMult(n: number): void {
    this.sanauser.plan_mult = n;
  }
  getPlanBonus(): number {
    return this.sanauser.plan_bonus;
  }
  setPlanBonus(n: number): void {
    this.sanauser.plan_bonus = n;
  }
  getQuote(): number {
    return this.sanauser.quote_total;
  }
  setQuote(n: number): void {
    this.sanauser.quote_total = n;
  }
}
