export type TitemType = {
  "id" : number
  "version_id": number
  "current_id": number
  "planned_id": number
  "count_versions": number
  "address_id": number
  "address_unrestricted_value": string
  "calculation_priority": string | null
  "contract_id": number
  "contract_number": number
  "contract_code": string
  "contract_enterprise_id": number
  "contract_enterprise_name": string
  "enterprise_id": number
  "enterprise_name_short": string
  "flag_apartament_house": number
  "flag_conclusion": number
  "flag_delta": number
  "house_equipment": string | null
  "flag_hourly_metering_devices": number,
  "flag_microgeneration": number,
  "house_control_type": string | null
  "house_control_type_change_at": string | null,
  "max_power": number,
  "max_power_determination_method": string,
  "name": string
  "number_of_resident": number | null
  "number_of_rooms": string | null
  "ordinal_number": number | null
  "power_supply_facility_type_id": number
  "power_supply_facility_type_name": string
  "price_category": number | null
  "purpose_of_placement": string
  "square_of_common_area": number | null
  "square_of_placement": number | null
  "status_id": number
  "status": string
  "sitel_id": number | null
  "tariff_group_consumer_type_id": number
  "tariff_group_consumer_type": string
  "zone_group": number | null
  "flag_high_voltage_transformers": number
  "start_at": string
  "end_at": string | null
  "is_planned": number
  "flag_version": number
  "created_at": string
  "created_by": number
  "created_by_name": string
  "updated_at": string | null
  "updated_by_name": string | null
}